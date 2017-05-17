/* global window */
import { createSelector } from 'reselect';
import { makeCreators, makeReducer } from './redux-utils';
import { createWeb3 } from '../web3';
import { toPromise, fallback, bytesToHex, bytesToNumber } from '../utils';
import initialRpcProviders from '../rpcProviders.json';
import initialChains from '../chains.json';

// TODO: Fetch providers and chain configuration from updateable IPFS resource

const initialState = {
  rpcProvider: null,
  walletProvider: null,
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

let currentWeb3 = null;
export const getWeb3 = createSelector(
  [state => state.web3.rpcProvider, state => state.web3.walletProvider],
  (rpcProvider, walletProvider) => {
    // Stop current web3 instance if supported
    if (currentWeb3 && currentWeb3.currentProvider && currentWeb3.currentProvider.stop) {
      currentWeb3.currentProvider.stop();
    }
    const newWeb3 = createWeb3(rpcProvider, walletProvider);
    currentWeb3 = newWeb3;
    window.web3 = currentWeb3;
    return currentWeb3;
  }
);

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
  const web3 = getWeb3(getState());
  await dispatch(
    setVersion({
      web3: web3.version.api,
      node: await fallback(toPromise(web3.version.getNode)()),
      network: await fallback(toPromise(web3.version.getNetwork)()),
      ethereum: await fallback(toPromise(web3.version.getEthereum)()),
      whisper: await fallback(toPromise(web3.version.getWhisper)()),
      compilers: await fallback(toPromise(web3.eth.getCompilers)()),
    })
  );
};

export const fetchNodeState = () => async (dispatch, getState) => {
  const web3 = getWeb3(getState());
  await dispatch(
    setNode({
      listening: await fallback(toPromise(web3.net.getListening)()),
      peerCount: await fallback(toPromise(web3.net.getPeerCount)()),
      syncing: await fallback(toPromise(web3.eth.getSyncing)()),
      mining: await fallback(toPromise(web3.eth.getMining)()),
      hashrate: await fallback(toPromise(web3.eth.getHashrate)()),
      coinbase: await fallback(toPromise(web3.eth.getCoinbase)()),
    })
  );
};

const stringifyNumber = bignum => (bignum === null ? null : bignum.toString());

export const identifyChain = async (chains, web3, fork = 0) => {
  const blockHash = async number => (await toPromise(web3.eth.getBlock)(number)).hash;
  const hash = await blockHash(fork);
  if (hash in chains) {
    const chain = chains[hash];
    if (chain.forked) {
      const next = await blockHash(chains[hash].forked);
      if (next === null) {
        return `Outdated snapshot of ${chain.label}`;
      }
      return identifyChain(chains[hash].forks, web3, chains[hash].forked);
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
  const web3 = getWeb3(state);
  await dispatch(
    setChain({
      name: await identifyChain(state.web3.chains, web3),
      gasPrice: stringifyNumber(await fallback(toPromise(web3.eth.getGasPrice)())),
    })
  );
};

export const fetchWalletState = () => async (dispatch, getState) => {
  const web3 = getWeb3(getState());
  const accounts = await fallback(toPromise(web3.eth.getAccounts)());
  await dispatch(
    setWallet(
      await Promise.all(
        accounts.map(async address => ({
          address,
          balance: stringifyNumber(await fallback(toPromise(web3.eth.getBalance)(address))),
          count: await fallback(toPromise(web3.eth.getTransactionCount)(address)),
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
