import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTranslator } from '../reducers/translation';
import { getBlockNumber } from '../reducers/web3';
import { getOrderedTransactions } from '../reducers/transactions';
import Address from './Address';
import EtherAmount from './EtherAmount';

const TransactionsComponent = ({ i18n, txs, chainBlockNumber }) => (
  <table>
    <thead>
      <tr>
        <th>{i18n('From')}</th>
        <th>{i18n('To')}</th>
        <th>{i18n('Amount')}</th>
        <th>{i18n('State')}</th>
        <th>{i18n('Confirmations')}</th>
      </tr>
    </thead>
    <tbody>
      {txs.map(({ id, from, to, value, state, blockNumber }) => (
        <tr key={id}>
          <td><Address address={from} /></td>
          <td><Address address={to} /></td>
          <td><EtherAmount wei={value} /></td>
          <td>{state}</td>
          <td>{chainBlockNumber - blockNumber}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionsComponent.propTypes = {
  i18n: PropTypes.func.isRequired,
  txs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      from: PropTypes.string,
      to: PropTypes.string,
      value: PropTypes.string,
      state: PropTypes.string,
      blockNumber: PropTypes.number,
    })
  ).isRequired,
  chainBlockNumber: PropTypes.number.isRequired,
};

export default connect(state => ({
  i18n: getTranslator(state),
  txs: getOrderedTransactions(state),
  chainBlockNumber: getBlockNumber(state) || 0,
}))(TransactionsComponent);
