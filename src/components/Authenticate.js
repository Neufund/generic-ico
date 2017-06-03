import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import { doAuthenticate } from '../reducers/authenticate';

const AuthenticateView = ({ address, submit }) => (
  <div>
    {address}
    <FlatButton onClick={() => submit(address)}>
      Authenticate
    </FlatButton>
  </div>
);

AuthenticateView.propTypes = {
  address: PropTypes.string,
  submit: PropTypes.func.isRequired,
};

AuthenticateView.defaultProps = {
  address: '',
};

export default connect(
  state => ({
    address: (state.web3.wallet || [{ address: undefined }])[0].address,
  }),
  dispatch => ({
    submit: address => dispatch(doAuthenticate(address)),
  })
)(AuthenticateView);
