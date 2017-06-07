import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, CardText } from 'material-ui/Card';
import Subheader from 'material-ui/Subheader';
import { getTranslator } from '../reducers/translation';
import RpcProviderSelector from '../components/RpcProviderSelector';
import WalletProviderSelector from '../components/WalletProviderSelector';
import Web3ProviderInfo from '../components/Web3ProviderInfo';
import Web3NodeInfo from '../components/Web3NodeInfo';
import Web3ChainInfo from '../components/Web3ChainInfo';
import Web3WalletInfo from '../components/Web3WalletInfo';
import Transactions from '../components/Transactions';
import TransferForm from '../components/TransferForm';
import Authenticate from '../components/Authenticate';

export const TestComponent = ({ i18n }) => (
  <div>
    <Card>
      <CardText>
        <Authenticate />
      </CardText>
    </Card>
    <Card>
      <CardText>
        <Subheader>{i18n('Settings')}</Subheader>
        <RpcProviderSelector />
        <br />
        <WalletProviderSelector />
      </CardText>
    </Card>
    <Card>
      <CardText>
        <Subheader>Provider info</Subheader>
        <Web3ProviderInfo />
        <Subheader>Node info</Subheader>
        <Web3NodeInfo />
        <Subheader>Chain info</Subheader>
        <Web3ChainInfo />
        <Subheader>Wallet info</Subheader>
        <Web3WalletInfo />
        <Subheader>Transactions</Subheader>
        <Transactions />
      </CardText>
    </Card>
    <Card>
      <CardText>
        <TransferForm />
      </CardText>
    </Card>
  </div>
);

TestComponent.propTypes = {
  i18n: PropTypes.func.isRequired,
};

export default connect(state => ({
  i18n: getTranslator(state),
}))(TestComponent);
