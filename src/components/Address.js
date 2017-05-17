import React from 'react';
import PropTypes from 'prop-types';
import { toChecksumAddress } from 'ethereumjs-util';

const Address = ({ address }) => <code>{toChecksumAddress(address)}</code>;

Address.propTypes = {
  address: PropTypes.string.isRequired,
};

export default Address;
