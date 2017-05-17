import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import { Toolbar } from 'material-ui/Toolbar';
import { Card, CardText } from 'material-ui/Card';
import Subheader from 'material-ui/Subheader';
import { getTranslator } from '../reducers/translation';
import RpcProviderSelector from './RpcProviderSelector';
import WalletProviderSelector from './WalletProviderSelector';
import Web3ProviderInfo from './Web3ProviderInfo';
import Web3NodeInfo from './Web3NodeInfo';
import Web3ChainInfo from './Web3ChainInfo';
import Web3WalletInfo from './Web3WalletInfo';

export const AppComponent = ({ i18n }) => (
  <div>
    <AppBar title={i18n('To do')} iconClassNameRight="muidocs-icon-navigation-expand-more" />
    <Toolbar />
    <Card>
      <CardText>
        <Subheader>Settings</Subheader>
        <RpcProviderSelector />
        <br />
        <WalletProviderSelector />
        <Subheader>Provider info</Subheader>
        <Web3ProviderInfo />
        <Subheader>Node info</Subheader>
        <Web3NodeInfo />
        <Subheader>Chain info</Subheader>
        <Web3ChainInfo />
        <Subheader>Wallet info</Subheader>
        <Web3WalletInfo />
      </CardText>
    </Card>
  </div>
);

AppComponent.propTypes = {
  i18n: PropTypes.func.isRequired,
};

export default connect(state => ({
  i18n: getTranslator(state),
}))(AppComponent);
