import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FontIcon from 'material-ui/FontIcon';

// TODO: This function could be refactored to separate file.
const lookupUrl = networkId => (ethAddress) => {
  let etherscanPrefix;
  switch (networkId) {
    case '1':
      etherscanPrefix = '';
      break;
    case '3':
      etherscanPrefix = 'ropsten.';
      break;
    case '4':
      etherscanPrefix = 'rinkeby.';
      break;
    case '42':
      etherscanPrefix = 'kovan.';
      break;
    default:
      return null;
  }
  return `https://${etherscanPrefix}etherscan.io/address/${ethAddress}`;
};

// TODO: Add checksum to address.
// TODO: Render addresses in a readable monospaced font.
// TODO: Elide long addresses (best done using CSS).
// TODO: Bonus points if it elide in the middle, like 0x7B9Bc4…2Ae47D.
// TODO: Add tooltip with full address as it's possible that address will be shortened.

const ETHAddress = ({ ethAddress, lookupUrlFunction }) => {
  const etherscanUrl = lookupUrlFunction(ethAddress);
  if (etherscanUrl === null) {
    return <div>{ethAddress}</div>;
  }

  return (
    <div>
      <a target="_blank" rel="noreferrer noopener" href={etherscanUrl}>
        <FontIcon style={{ marginRight: '1rem', verticalAlign: 'middle' }} className="material-icons">link</FontIcon>
      </a>
      {ethAddress}
    </div>);
};

ETHAddress.propTypes = {
  ethAddress: PropTypes.string.isRequired, // TODO: Create own validator https://www.ian-thomas.net/custom-proptype-validation-with-react/
  lookupUrlFunction: PropTypes.func.isRequired,
};

export default connect(state => ({
  lookupUrlFunction: lookupUrl(state.web3.version.network),
}))(ETHAddress);
