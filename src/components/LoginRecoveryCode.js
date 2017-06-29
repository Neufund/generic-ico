import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { getTranslator } from '../reducers/translation';
import { SquareButton } from '../components/Buttons';
import FieldText from '../components/FieldText';
import { container, help } from '../pages/LoginPage.scss';
import { field } from './Login2FA.scss';

// Here it's impossible to use stylesheets. You can only pass inline styling to text input
const hintStyle = {
  fontFamily: "'Montserrat', sans-serif",
  color: '#b3b7ba',
  fontSize: '1rem',
};

const LoginRecoveryCodeComponent = ({ i18n, handleSubmit, hideShowAll, onShowAllClick }) =>
  (<form className={container} onSubmit={handleSubmit}>
    <div>
      <h2>Log in</h2>
      <p>Remember to store your recovery code in a secure place</p>
      <FieldText
        name="recoveryCode"
        hintText={i18n('Recovery code')}
        fullWidth
        hintStyle={hintStyle}
        className={field}
      />
    </div>
    <div>
      <SquareButton>{i18n('Log in')}</SquareButton>
      <p className={help}>
        {i18n('Lost your account?')} <a>{i18n('Recover')}</a>
        { !hideShowAll &&
        <span><br />{i18n('Not your login method?')} <a
          tabIndex={0}
          role="button"
          onClick={onShowAllClick}
        >{i18n('Show all')}</a></span>
        }
      </p>
    </div>
  </form>);

LoginRecoveryCodeComponent.propTypes = {
  i18n: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  onShowAllClick: PropTypes.func.isRequired,
  hideShowAll: PropTypes.bool,
};

LoginRecoveryCodeComponent.defaultProps = {
  hideShowAll: false,
};

function handleSubmitFunc(values) {
  console.log(JSON.stringify(values, null, 2));
}

const LoginRecoveryCodeForm = reduxForm({
  form: 'simple',
  onSubmit: handleSubmitFunc,
})(LoginRecoveryCodeComponent);

export default connect(
  state => ({ i18n: getTranslator(state) })
)(LoginRecoveryCodeForm);
