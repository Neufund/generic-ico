import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTranslator } from '../reducers/translation';
import Address from './Address';

const Web3NodeInfoComponent = ({
  i18n,
  listening,
  peerCount,
  syncing,
  mining,
  hashrate,
  coinbase,
}) => {
  const catchNull = next => val => (val === null ? i18n('unavailable') : next(val));
  const bool = catchNull(val => (val ? i18n('yes') : i18n('no')));
  const number = (val, suffix = '') => catchNull(v => v + suffix)(val);
  return (
    <table>
      <tbody>
        <tr>
          <th>{i18n('Listening: ')}</th>
          <td>{bool(listening)}</td>
        </tr>
        <tr>
          <th>{i18n('Peer count: ')}</th>
          <td>{number(peerCount)}</td>
        </tr>
        <tr>
          <th>{i18n('Synchronizing: ')}</th>
          <td>{bool(syncing)}</td>
        </tr>
        <tr>
          <th>{i18n('Mining: ')}</th>
          <td>{bool(mining)}</td>
        </tr>
        <tr>
          <th>{i18n('Hashrate: ')}</th>
          <td>{number(hashrate, i18n(' Hz'))}</td>
        </tr>
        <tr>
          <th>{i18n('Coinbase: ')}</th>
          <td>{coinbase ? <Address address={coinbase} /> : i18n('unavailable')}</td>
        </tr>
      </tbody>
    </table>
  );
};

Web3NodeInfoComponent.propTypes = {
  i18n: PropTypes.func.isRequired,
  listening: PropTypes.bool,
  peerCount: PropTypes.number,
  syncing: PropTypes.bool,
  mining: PropTypes.bool,
  hashrate: PropTypes.number,
  coinbase: PropTypes.string,
};

Web3NodeInfoComponent.defaultProps = {
  listening: null,
  peerCount: null,
  syncing: null,
  mining: null,
  hashrate: null,
  coinbase: null,
};

export default connect(state => ({
  i18n: getTranslator(state),
  ...state.web3.node,
}))(Web3NodeInfoComponent);
