import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTranslator } from '../reducers/translation';

const Web3ProviderInfoComponent = ({ i18n, web3, node, network, ethereum, whisper, compilers }) => (
  <table>
    <tbody>
      <tr>
        <th>{i18n('Web3: ')}</th>
        <td>{web3 || i18n('unavailable')}</td>
      </tr>
      <tr>
        <th>{i18n('Node: ')}</th>
        <td>{node || i18n('unavailable')}</td>
      </tr>
      <tr>
        <th>{i18n('network: ')}</th>
        <td>{network || i18n('unavailable')}</td>
      </tr>
      <tr>
        <th>{i18n('Ethereum: ')}</th>
        <td>{ethereum || i18n('unavailable')}</td>
      </tr>
      <tr>
        <th>{i18n('Whisper: ')}</th>
        <td>{whisper || i18n('unavailable')}</td>
      </tr>
      <tr>
        <th>{i18n('Compilers: ')}</th>
        <td>
          {compilers === null
            ? i18n('unavailable')
            : compilers.map(compiler => <span>{compiler}</span>)}
        </td>
      </tr>
    </tbody>
  </table>
);

Web3ProviderInfoComponent.propTypes = {
  i18n: PropTypes.func.isRequired,
  web3: PropTypes.string,
  node: PropTypes.string,
  network: PropTypes.string,
  ethereum: PropTypes.string,
  whisper: PropTypes.string,
  compilers: PropTypes.arrayOf(PropTypes.string.isRequired),
};

Web3ProviderInfoComponent.defaultProps = {
  web3: null,
  node: null,
  network: null,
  ethereum: null,
  whisper: null,
  compilers: null,
};

export default connect(state => ({
  i18n: getTranslator(state),
  ...state.web3.version,
}))(Web3ProviderInfoComponent);
