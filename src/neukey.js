import ledger from 'ledgerco';
import EthereumTx from 'ethereumjs-tx';
import semver from 'semver';
import sha256 from 'crypto-js/sha256';

// Collected errors:
// 6801: Sleeping / locked
// 6985: Signature rejected
// 6985: Transaction rejected

// eslint-disable-next-line new-cap
const connection = timeout => new ledger.eth(new ledger.comm_u2f(timeout));

// Default key derivation path
const path = "44'/60'/0'/0/";

export const isConnected = async () => {
  const timeout = 3;
  const eth = connection(timeout);

  // getAppConfiguration still succeeds if app is in sleep lock
  const { version, arbitraryDataEnabled } = await eth.getAppConfiguration();
  console.log(version);
  if (!semver.satisfies(version, '0.12.0')) {
    throw new Error('Please update the Ethereum app.');
  }
  if (!arbitraryDataEnabled) {
    throw new Error('Please enable smart contract data.');
  }

  // getAddress will fail if app is in sleep lock.
  await eth.getAddress_async(path);
};

export const getAddress = async () => {
  const timeout = 3;
  const eth = connection(timeout);
  const { address } = eth.getAddress_async(path, false, false);
  return address;
};

export const sign = async (message) => {
  // Set a long timeout for the user to interact
  // TODO: Set inifite timeout and allow user to cancel.
  const timeout = 60;
  const eth = connection(timeout);

  // Encode messages
  const bytes = Buffer.from(message, 'utf8');
  const hex = bytes.toString('hex');

  // Compute message hash (so we can display it onscreen)
  // Ledge Nano shows sha256(message)
  // See: https://github.com/LedgerHQ/blue-app-eth/blob/master/src_genericwallet/main.c#L2447
  const hash = sha256(message).toString().toUpperCase();
  const dhash = `${hash.slice(0, 4)}…${hash.slice(-4)}`;
  const display = `*Sign the\n*message\nMessage hash\n*${dhash}`;
  console.log(display);

  // See: https://github.com/LedgerHQ/ledger-node-js-api/blob/23ee17b401fd3dbb122f51ffca5c8119bc52c72e/src/ledger-eth.js#L113
  const { r, s, v } = await eth.signPersonalMessage_async(path, hex);

  // v is in the range 27—30, so will always take exactly two nibbles
  return r + s + v.toString(16);
};

export const transact = async (transaction, sendRaw) => {
  // Set a long timeout for the user to interact
  // TODO: Set inifite timeout and allow user to cancel.
  const timeout = 60;
  const eth = connection(timeout);

  // Parse unsigned transaction
  const unsigned = new EthereumTx(transaction);

  // Compute the text on the Ledger Nano display
  const dto = `${transaction.to.slice(0, 6)}…${transaction.to.slice(-4)}`;
  const damount = 0;
  const dfee = 0;
  const display = `*Confirm\n*transaction\nAmount\n*ETH ${damount}\nAddress\n*${dto}\nMaximum fees\n*ETH ${dfee}`;
  console.log(display);

  // Get signature paramaters from Nano Ledger
  // Assume transaction.from matches the address for path
  const { r, s, v } = await eth.signTransaction_async(path, unsigned.serialize());

  // Create signed transaction
  const signed = new EthereumTx({
    ...transaction,
    r: Buffer.from(r, 'hex'),
    s: Buffer.from(s, 'hex'),
    v: Buffer.from(v, 'hex'),
  });

  // Check for errors
  const error = signed.validate(true);
  if (error !== '') {
    throw new Error(error);
  }

  // Pass signed transaction data to sendRaw
  return sendRaw(signed.serialize().toString('hex'));
};
