import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTranslator } from '../reducers/translation';
import Address from './Address';
import EtherAmount from './EtherAmount';

const Web3WalletInfoComponent = ({ i18n, wallet }) =>
  wallet == null
    ? <div>{i18n('Wallet unavailable')}</div>
    : <table>
      <thead>
        <tr>
          <th>{i18n('Address')}</th>
          <th>{i18n('Balance')}</th>
          <th>{i18n('Transactions')}</th>
        </tr>
      </thead>
      <tbody>
        {wallet.map(({ address, balance, transactions }) => (
          <tr key={address}>
            <td>{<Address address={address} /> || i18n('unavailable')}</td>
            <td>{<EtherAmount wei={balance} /> || i18n('unavailable')}</td>
            <td>{transactions === null ? i18n('unavailable') : transactions}</td>
          </tr>
          ))}
      </tbody>
    </table>;

Web3WalletInfoComponent.propTypes = {
  i18n: PropTypes.func.isRequired,
  wallet: PropTypes.arrayOf(
    PropTypes.shape({
      address: PropTypes.string,
      balance: PropTypes.string,
      transactions: PropTypes.number,
    })
  ),
};

Web3WalletInfoComponent.defaultProps = {
  wallet: [{ address: null, balance: null, transactions: null }],
};

export default connect(state => ({
  i18n: getTranslator(state),
  wallet: state.web3.wallet,
}))(Web3WalletInfoComponent);
