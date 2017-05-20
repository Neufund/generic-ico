import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SelectField } from 'redux-form-material-ui';
import MenuItem from 'material-ui/MenuItem';
import { fromWei } from 'web3/lib/utils/utils';
import { getTranslator } from '../reducers/translation';

const elide = address =>
  `${address.substring(0, 8)}…\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0`;

const WalletAddressSelector = ({ i18n, wallet, dispatch, ...props }) => (
  <SelectField floatingLabelText={i18n('From')} autoWidth {...props}>
    {wallet.map(({ address, balance }) => (
      <MenuItem
        key={address}
        value={address}
        primaryText={elide(address)}
        secondaryText={Math.round(fromWei(balance, 'ether'))}
      />
    ))}
  </SelectField>
);

WalletAddressSelector.propTypes = {
  i18n: PropTypes.func.isRequired,
  dispatch: PropTypes.func,
  wallet: PropTypes.arrayOf(
    PropTypes.shape({
      address: PropTypes.string,
      balance: PropTypes.string,
    })
  ),
};

WalletAddressSelector.defaultProps = {
  wallet: [],
  dispatch: null,
};

export default connect(state => ({
  i18n: getTranslator(state),
  wallet: state.web3.wallet || [],
}))(WalletAddressSelector);
