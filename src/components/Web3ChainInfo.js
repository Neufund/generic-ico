import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTranslator } from '../reducers/translation';

const Web3ChainInfoComponent = ({
  i18n,
  name,
  blockNumber,
  blockHash,
  blockTime,
  gasPrice,
  gasLimit,
}) => (
  <table>
    <tbody>
      <tr>
        <th>{i18n('Name: ')}</th>
        <td>{name}</td>
      </tr>
      <tr>
        <th>{i18n('Gas price: ')}</th>
        <td>{gasPrice}</td>
      </tr>
      <tr>
        <th>{i18n('Gas limit: ')}</th>
        <td>{gasLimit}</td>
      </tr>
      <tr>
        <th>{i18n('Block time: ')}</th>
        <td>{new Date(blockTime * 1000).toString()}</td>
      </tr>
      <tr>
        <th>{i18n('Block number: ')}</th>
        <td>{blockNumber}</td>
      </tr>
      <tr>
        <th>{i18n('Block hash: ')}</th>
        <td>{blockHash}</td>
      </tr>
    </tbody>
  </table>
);

Web3ChainInfoComponent.propTypes = {
  i18n: PropTypes.func.isRequired,
  name: PropTypes.string,
  blockNumber: PropTypes.number,
  blockHash: PropTypes.string,
  blockTime: PropTypes.number,
  gasPrice: PropTypes.string,
  gasLimit: PropTypes.number,
};

Web3ChainInfoComponent.defaultProps = {
  name: null,
  blockNumber: null,
  blockHash: null,
  blockTime: null,
  gasPrice: null,
  gasLimit: null,
};

export default connect(state => ({
  i18n: getTranslator(state),
  ...state.web3.chain,
}))(Web3ChainInfoComponent);
