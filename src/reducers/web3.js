/* global window */
import { createSelector } from 'reselect';
import { makeCreators, makeReducer } from './redux-utils';
import { createWeb3 } from '../web3';
import { objectMap, objectPromise, toPromise, fallback, bytesToHex, bytesToNumber } from '../utils';
import initialRpcProviders from '../rpcProviders.json';
import initialChains from '../chains.json';

// TODO: Fetch providers and chain configuration from updateable IPFS resource

const initialState = {
  rpcProvider: null,
  walletProvider: 'Node',
  version: {
    web3: null,
    node: null,
    network: null,
    ethereum: null,
    whisper: null,
    compilers: null,
  },
  node: {
    listening: null,
    peerCount: null,
    syncing: null,
    mining: null,
    hashrate: null,
    coinbase: null,
  },
  chain: {
    name: null,
    confirmations: 10,
    gasPrice: null,
    gasLimit: null,
    blockNumber: null,
    blockHash: null,
    blockTime: null,
  },
  wallet: null,
  rpcProviders: initialRpcProviders,
  chains: initialChains,
  walletProviders: [{ label: 'Node' }, { label: 'Ledger Nano' }, { label: 'Neufund 2FA' }],
};

const reducers = {
  setRpcProvider: (state, rpcProvider) => ({
    ...state,
    version: initialState.version,
    node: initialState.version,
    wallet: initialState.wallet,
    chain: initialState.chain,
    rpcProvider,
  }),
  setWalletProvider: (state, walletProvider) => ({
    ...state,
    walletProvider,
    wallet: initialState.wallet,
  }),
  setVersion: (state, version) => ({
    ...state,
    version,
  }),
  setNode: (state, node) => ({
    ...state,
    node,
  }),
  setChain: (state, chain) => ({
    ...state,
    chain: {
      ...state.chain,
      ...chain,
    },
  }),
  setWallet: (state, wallet) => ({
    ...state,
    wallet,
  }),
  newBlock: (state, block) => ({
    ...state,
    chain: {
      ...state.chain,
      ...block,
    },
  }),
};

export const reducer = makeReducer(reducers, initialState);
export const creators = makeCreators(reducers);
export const { setWalletProvider, setVersion, setNode, setWallet, setChain, newBlock } = creators;
export default reducer;

// Selectors

const synchronousRequests = {
  version: ['node', 'network', 'ethereum', 'whisper'],
  eth: [
    'coinbase',
    'mining',
    'hashrate',
    'syncing',
    'gasPrice',
    'accounts',
    'blockNumber',
    'protocolVersion',
  ],
  net: ['listening', 'peerCount'],
};

const propFilter = (obj, filter) =>
  Object.keys(obj).reduce(
    (others, key) => (filter(key) ? { ...others, [key]: obj[key] } : others),
    {}
  );

let currentWeb3 = null;
export const getWeb3 = createSelector(
  [state => state.web3.rpcProvider, state => state.web3.walletProvider],
  (rpcProvider, walletProvider) => {
    // Stop current web3 instance if supported
    if (currentWeb3 && currentWeb3.currentProvider && currentWeb3.currentProvider.stop) {
      currentWeb3.currentProvider.stop();
    }

    // Create a new web3 instance
    const newWeb3 = createWeb3(rpcProvider, walletProvider);

    // Remove synchronous requests alltogether
    objectMap(synchronousRequests, (filter, key) => {
      newWeb3[key] = propFilter(newWeb3[key], k => !filter.includes(k));
    });

    // Store new instance in various places
    currentWeb3 = newWeb3;
    window.currentWeb3 = currentWeb3;
    return currentWeb3;
  }
);

export const getBlockNumber = state => state.web3.chain.blockNumber;

export const getEth = createSelector([getWeb3], web3 => objectMap(web3.eth, toPromise));

// Custom action creators

const coerceNumber = number => (number instanceof Uint8Array ? bytesToNumber(number) : number);

const coerceHex = bytes => (bytes instanceof Uint8Array ? bytesToHex(bytes) : bytes);

export const newRawBlock = block =>
  newBlock({
    gasLimit: coerceNumber(block.gasLimit),
    blockNumber: coerceNumber(block.number),
    blockHash: coerceHex(block.hash),
    blockTime: coerceNumber(block.timestamp),
  });

export const fetchVersionInfo = () => async (dispatch, getState) => {
  const state = getState();
  const web3 = getWeb3(state);
  const eth = getEth(state);
  const version = objectMap(web3.version, toPromise);
  await dispatch(
    setVersion(
      await objectPromise(
        objectMap(
          {
            web3: web3.version.api,
            node: version.getNode(),
            network: version.getNetwork(),
            ethereum: version.getEthereum(),
            whisper: version.getWhisper(),
            compilers: eth.getCompilers(),
          },
          x => fallback(x)
        )
      )
    )
  );
};

export const fetchNodeState = () => async (dispatch, getState) => {
  const state = getState();
  const web3 = getWeb3(state);
  const eth = getEth(state);
  const net = objectMap(web3.net, toPromise);
  await dispatch(
    setNode(
      await objectPromise(
        objectMap(
          {
            listening: net.getListening(),
            peerCount: net.getPeerCount(),
            syncing: eth.getSyncing(),
            mining: eth.getMining(),
            hashrate: eth.getHashrate(),
            coinbase: eth.getCoinbase(),
          },
          x => fallback(x)
        )
      )
    )
  );
};

const stringifyNumber = bignum => (bignum === null ? null : bignum.toString());

export const identifyChain = async (chains, blockHash, fork = 0) => {
  const hash = await blockHash(fork);
  if (hash in chains) {
    const chain = chains[hash];
    if (chain.forked) {
      const next = await blockHash(chains[hash].forked);
      if (next === null) {
        return `Outdated snapshot of ${chain.label}`;
      }
      return identifyChain(chains[hash].forks, blockHash, chains[hash].forked);
    }
    const top = await blockHash(chain.number);
    if (top === null) {
      return `Outdated snapshot of ${chain.label}`;
    }
    if (top === chain.hash) {
      return chain.label;
    }
    return `Unknown fork of ${chain.label}`;
  }
  return 'Unknown chain';
};

export const fetchChainState = () => async (dispatch, getState) => {
  const state = getState();
  const eth = getEth(state);
  await dispatch(
    setChain({
      name: await identifyChain(state.web3.chains, async n => (await eth.getBlock(n)).hash),
      gasPrice: stringifyNumber(await fallback(eth.getGasPrice())),
    })
  );
};

export const fetchWalletState = () => async (dispatch, getState) => {
  const state = getState();
  const eth = getEth(state);
  const accounts = await fallback(eth.getAccounts(), []);
  await dispatch(
    setWallet(
      await Promise.all(
        accounts.map(async address => ({
          address,
          balance: stringifyNumber(await fallback(eth.getBalance(address))),
          count: await fallback(eth.getTransactionCount(address)),
        }))
      )
    )
  );
};

export const setRpcProvider = url => async (dispatch, getState) => {
  if (getState().web3.rpcProvider === url) {
    return;
  }
  await dispatch(creators.setRpcProvider(url));
  const web3 = getWeb3(getState());
  const engine = web3.currentProvider;
  if (engine && engine.on) {
    engine.on('block', block => dispatch(newRawBlock(block)));
    engine.on('error', (error) => {
      throw new Error(error);
    });
  } else {
    // TODO: Start custom polling provider
  }
  await dispatch(fetchVersionInfo());
  await dispatch(fetchNodeState());
  await dispatch(fetchChainState());
  await dispatch(fetchWalletState());

  // Force feed the latest block
  const latest = await toPromise(web3.eth.getBlock)('latest');
  await dispatch(newRawBlock(latest));
};
