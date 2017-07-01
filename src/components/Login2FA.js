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

const Login2FAComponent = ({ i18n, handleSubmit, hideShowAll, onShowAllClick }) =>
  (<form className={container} onSubmit={handleSubmit}>
    <div>
      <h2>Log in</h2>
      <FieldText
        name="email"
        hintText={i18n('email')}
        fullWidth
        hintStyle={hintStyle}
        className={field}
      />
      <FieldText
        name="password"
        hintText={i18n('password')}
        fullWidth
        type="password"
        hintStyle={hintStyle}
        className={field}
      />
      <FieldText
        name="code"
        hintText={i18n('6 digits code')}
        fullWidth
        hintStyle={hintStyle}
        className={field}
      />
    </div>
    <div>
      <SquareButton type="submit" >{i18n('Log in')}</SquareButton>
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

Login2FAComponent.propTypes = {
  i18n: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  onShowAllClick: PropTypes.func.isRequired,
  hideShowAll: PropTypes.bool,
};

Login2FAComponent.defaultProps = {
  hideShowAll: false,
};

const Login2FAForm = reduxForm({
  form: 'Login2FA',
})(Login2FAComponent);

export default connect(
  state => ({ i18n: getTranslator(state) })
)(Login2FAForm);
