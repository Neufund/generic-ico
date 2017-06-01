import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { KYCLink } from '../components/PredefinedLinks';

const ConfirmEmailComponent = ({ confirmationId }) => (<div>
  <h2>Confirmation of e-mail and second factor auth setup page</h2>
  <div>Got confirmation id: {confirmationId}</div>
  <KYCLink>Registration succeed go to KYC page</KYCLink> <br />
</div>);

ConfirmEmailComponent.propTypes = {
  confirmationId: PropTypes.string.isRequired,
};

export default connect(
  state => ({
    confirmationId: state.router.current.params.confirmationId,
  })
)(ConfirmEmailComponent);
