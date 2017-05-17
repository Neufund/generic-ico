import React from 'react';
import PropTypes from 'prop-types';
import { fromWei } from 'web3/lib/utils/utils';

const EtherAmount = ({ wei }) => <span>{fromWei(wei, 'ether')} Eth</span>;

EtherAmount.propTypes = {
  wei: PropTypes.string.isRequired,
};

export default EtherAmount;
