import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { getTranslator } from '../reducers/translation';
import { setRpcProvider } from '../reducers/web3';

export const RpcProviderSelectorComponent = ({
  i18n,
  rpcProvider,
  rpcProviders,
  changeRpcProvider,
}) => (
  <SelectField
    floatingLabelText={i18n('Ethereum Node')}
    value={rpcProvider}
    autoWidth
    onChange={(event, index, value) => {
      changeRpcProvider(value);
    }}
  >
    {rpcProviders.map(({ url, label }) => (
      <MenuItem
        key={url}
        value={url}
        primaryText={
          <div>
            {label}<br />
            <small><code>{url}</code></small>
          </div>
        }
      />
    ))}
  </SelectField>
);

RpcProviderSelectorComponent.propTypes = {
  i18n: PropTypes.func.isRequired,
  rpcProvider: PropTypes.string,
  rpcProviders: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  changeRpcProvider: PropTypes.func.isRequired,
};

RpcProviderSelectorComponent.defaultProps = {
  rpcProvider: null,
};

export default connect(
  state => ({
    i18n: getTranslator(state),
    rpcProvider: state.web3.walletProvider,
    rpcProviders: state.web3.rpcProviders,
  }),
  dispatch => ({
    changeRpcProvider: provider => dispatch(setRpcProvider(provider)),
  })
)(RpcProviderSelectorComponent);
