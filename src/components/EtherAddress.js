import PropTypes from 'prop-types';
import { isValidAddress } from 'ethereumjs-util';

// Accepts checksummed addresses too
const EtherAddress = address => isValidAddress(address);

EtherAddress.propTypes = {
  address: PropTypes.string.isRequired,
};

export default EtherAddress;
