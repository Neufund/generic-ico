import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTranslator } from '../reducers/translation';
import { SquareButton } from '../components/Buttons';
import { help } from '../pages/LoginPage.scss';

const Login2FAComponent = ({ i18n }) =>
  (<div>
    <h2>{i18n('Log in')}</h2>
    <p>email</p>
    <p>password</p>
    <p>6 digits code</p>
    <SquareButton>Log in</SquareButton>
    <p className={help}>{i18n('Lost your account?')} <a>{i18n('Recover')}</a></p>
  </div>);

Login2FAComponent.propTypes = {
  i18n: PropTypes.func.isRequired,
};

export default connect(
  state => ({ i18n: getTranslator(state) })
)(Login2FAComponent);
