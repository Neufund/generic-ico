import React from 'react';
import PropTypes from 'prop-types';
import { Field, propTypes } from 'redux-form';
import { TextField } from 'redux-form-material-ui';
import FlatButton from 'material-ui/FlatButton';
import { getTranslator } from '../reducers/translation';
import { connectForm } from '../reducers/form';
import { sendTransaction } from '../reducers/transactions';
import WalletAddressSelector from './WalletAddressSelector';

const TransferFormComponent = ({ i18n, handleSubmit, pristine, reset, submitting }) => (
  <form onSubmit={handleSubmit}>
    <p>Submit a transaction!</p>
    <Field name="from" component={WalletAddressSelector} />
    <br />
    <Field name="to" component={TextField} floatingLabelText={i18n('To')} />
    <br />
    <Field name="value" component={TextField} floatingLabelText={i18n('Amount')} />
    <br />
    <FlatButton disabled={pristine || submitting} onClick={handleSubmit}>
      Submit
    </FlatButton>
    <FlatButton disabled={pristine || submitting} onClick={reset}>
      Clear Values
    </FlatButton>
  </form>
);

TransferFormComponent.propTypes = {
  i18n: PropTypes.func.isRequired,
  ...propTypes,
};

export default connectForm(
  {},
  state => ({
    i18n: getTranslator(state),
  }),
  dispatch => ({
    onSubmit: values => dispatch(sendTransaction(values)),
  })
)(TransferFormComponent);
