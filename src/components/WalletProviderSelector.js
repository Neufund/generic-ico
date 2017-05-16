import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { getTranslator } from '../reducers/translation';
import { setWalletProvider } from '../reducers/web3';

export const WalletProviderSelectorComponent = ({
  i18n,
  walletProvider,
  walletProviders,
  changeWalletProvider,
}) => (
  <SelectField
    floatingLabelText={i18n('Wallet Provider')}
    value={walletProvider}
    autoWidth
    onChange={(event, index, value) => {
      changeWalletProvider(value);
    }}
  >
    {walletProviders.map(({ label }) => <MenuItem key={label} value={label} primaryText={label} />)}
  </SelectField>
);

WalletProviderSelectorComponent.propTypes = {
  i18n: PropTypes.func.isRequired,
  walletProvider: PropTypes.string.isRequired,
  walletProviders: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  changeWalletProvider: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    i18n: getTranslator(state),
    walletProvider: state.web3.walletProvider,
    walletProviders: state.web3.walletProviders,
  }),
  dispatch => ({
    changeWalletProvider: provider => dispatch(setWalletProvider(provider)),
  })
)(WalletProviderSelectorComponent);
