/* global window */
import Web3 from 'web3';
import ProviderEngine from 'web3-provider-engine';
import CacheSubprovider from 'web3-provider-engine/subproviders/cache';
import FixtureSubprovider from 'web3-provider-engine/subproviders/fixture';
import FilterSubprovider from 'web3-provider-engine/subproviders/filters';
import VmSubprovider from 'web3-provider-engine/subproviders/vm';
import HookedWalletSubprovider from 'web3-provider-engine/subproviders/hooked-wallet';
import NonceSubprovider from 'web3-provider-engine/subproviders/nonce-tracker';
import RpcSubprovider from 'web3-provider-engine/subproviders/rpc';

const engineWithProviders = (providers) => {
  const engine = new ProviderEngine();
  providers.forEach(provider => (provider !== null ? engine.addProvider(provider) : engine));
  return engine;
};

export const createWallet = wallet =>
  wallet === 'Node'
    ? null
    : new HookedWalletSubprovider({
      getAccounts: cb => cb('Not implemented'),
      approveTransaction: cb => cb('Not implemented'),
      signTransaction: cb => cb('Not implemented'),
    });

export const createEngine = (rpcUrl, wallet) =>
  engineWithProviders([
    new FixtureSubprovider({
      web3_clientVersion: 'ProviderEngine/v0.0.0/javascript',
      net_listening: true,
      eth_hashrate: '0x00',
      eth_mining: false,
      eth_syncing: true,
    }),
    new CacheSubprovider(),
    new FilterSubprovider(),
    new NonceSubprovider(),
    new VmSubprovider(),
    wallet,
    new RpcSubprovider({ rpcUrl }),
  ]);

export const createWeb3 = (rpcUrl, walletProvider) => {
  if (rpcUrl === 'window.web3') {
    if (walletProvider !== 'Node') {
      // TODO: Implement support (it can be done)
      throw new Error('Builtin web3 provider with custom wallet is not supported.');
    }
    return window.web3;
  }
  const wallet = createWallet(walletProvider);
  const engine = createEngine(rpcUrl, wallet);
  engine.start();
  return new Web3(engine);
};
