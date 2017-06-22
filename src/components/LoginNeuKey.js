import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { routeTo } from 'redux-router-kit';
import { getTranslator } from '../reducers/translation';
import { BorderButton } from '../components/Buttons';
import nano from '../images/tutorial-NANO-1.png';
import { help } from '../pages/LoginPage.scss';

const LoginNeuKeyComponent = ({ i18n, onShowTutorialClick }) =>
  (<div>
    <h2>{i18n('Use NeuKey')}</h2>
    <p>{i18n('Connect your NeuKey to the USB')}</p>
    <img src={nano} alt="" />
    <BorderButton onClick={onShowTutorialClick}>
      {i18n('Show tutorial')}
    </BorderButton>
    <p className={help}>{i18n('Lost your NeuKey?')} <a>{i18n('Conntact support')}</a></p>
  </div>);

LoginNeuKeyComponent.propTypes = {
  i18n: PropTypes.func.isRequired,
  onShowTutorialClick: PropTypes.func.isRequired,
};

export default connect(
  state => ({ i18n: getTranslator(state) }),
  dispatch => ({ onShowTutorialClick: () => dispatch(routeTo('/login/nano')) })
)(LoginNeuKeyComponent);
