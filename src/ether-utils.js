import { isValidAddress } from 'ethereumjs-util';

// Accepts checksummed addresses too
const EtherAddress = address => isValidAddress(address);

export default EtherAddress;
