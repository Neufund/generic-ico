import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FontIcon from 'material-ui/FontIcon';

const ETHAddress = ({ ethAddress, networkId }) => {
  if (networkId === null) {
    return <div>{ethAddress}</div>;
  }

  let ethScanPrefix;
  switch (networkId) {
    case '1':
      ethScanPrefix = '';
      break;
    case '3':
      ethScanPrefix = 'ropsten.';
      break;
    case '4':
      ethScanPrefix = 'rinkeby.';
      break;
    case '42':
      ethScanPrefix = 'kovan.';
      break;
    default:
      ethScanPrefix = '';
  }
  const url = `https://${ethScanPrefix}etherscan.io/address/${ethAddress}`;
  return (
    <div>
      <a target="_blank" rel="noreferrer noopener" href={url}>
        <FontIcon style={{ marginRight: '1rem', verticalAlign: 'middle' }} className="material-icons">link</FontIcon>
      </a>
      {ethAddress}
    </div>);
};

ETHAddress.defaultProps = {
  networkId: '1',
};

ETHAddress.propTypes = {
  ethAddress: PropTypes.string.isRequired,
  networkId: PropTypes.string,
};

export default connect(state => ({
  networkId: state.web3.version.network,
}))(ETHAddress);
