import ledger from 'ledgerco';
import EthereumTx from 'ethereumjs-tx';
import { objectZip } from './utils';
import { hashPersonalMessage } from 'ethereumjs-util';
import sha256 from 'crypto-js/sha256';

const range = count => [...Array(count).keys()];

const connectNano = async () => {
  const comm = await ledger.comm_u2f.create_async();

  console.log(comm);

  const eth = new ledger.eth(comm);

  console.log(eth);

  window.leth = eth;

  // Ledger APP: `44'/60'/0'/${i}`

  // Jaxx, Metamask, Exodus, etc...
  // `44'/60'/0'/${i}`

  const paths = range(3).map(i => `44'/60'/0'/0/${i}`);

  console.log(paths);

  const addresses = await Promise.all(
    paths.map(async path => (await eth.getAddress_async(path)).address)
  );

  console.log(addresses);

  const lookup = objectZip(addresses, paths);

  console.log(lookup);

  const sign = async (address, message) => {
    const bytes = Buffer.from(message, 'utf8');

    // Compute message hash (so we can display it onscreen)
    // Ledge Nano shows sha256(message)
    // See: https://github.com/LedgerHQ/blue-app-eth/blob/master/src_genericwallet/main.c#L2447
    const hash = sha256(message).toString().toUpperCase();
    const dhash = `${hash.slice(0, 4)}…${hash.slice(-4)}`;
    const display = `*Sign the\n*message\nMessage hash\n*${dhash}`;
    console.log(display);

    // See: https://github.com/LedgerHQ/ledger-node-js-api/blob/23ee17b401fd3dbb122f51ffca5c8119bc52c72e/src/ledger-eth.js#L113
    const { r, s, v } = await eth.signPersonalMessage_async(lookup[address], bytes.toString('hex'));
    // v is in the range 27—30, so will always take exactly two nibbles
    return r + s + v.toString(16);
  };

  const signature = await sign(addresses[0], 'Hello, World!');
  console.log(signature);

  const transact = async (transaction, sendRaw) => {
    const address = transaction.from;
    if (!(address in lookup)) {
      throw new Error('Address not in wallet');
    }

    // Parse unsigned transaction
    const unsigned = new EthereumTx(transaction);

    const dto = `${transaction.to.slice(0, 6)}…${transaction.to.slice(-4)}`;
    const damount = 0;
    const dfee = 0;
    const display = `*Confirm\n*transaction\nAmount\n*ETH ${damount}\nAddress\n*${dto}\nMaximum fees\n*ETH ${dfee}`;
    console.log(display);

    // Get signature paramaters from Nano Ledger
    const { r, s, v } = await eth.signTransaction_async(lookup[address], unsigned.serialize());

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

  await transact(
    {
      from: addresses[0],
      to: addresses[1],
      amount: 4,
      gasLimit: 21000,
    },
    console.log
  );
};

window.connectNano = connectNano;

// 6801: Sleeping / locked
// 6985: Signature rejected
// 6985: Transaction rejected
