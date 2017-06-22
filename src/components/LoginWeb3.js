import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTranslator } from '../reducers/translation';

const LoginWeb3Component = ({ i18n }) =>
  (<div>
    <h2>{i18n('Use web 3.0')}</h2>
    <p>{i18n('Connect or download web 3.0 app. Neufund Platform supports:')}</p>
    <ul>
      <li>{i18n('Parity')}</li>
      <li>{i18n('MetaMask')}</li>
      <li>{i18n('Mist')}</li>
    </ul>
  </div>);

LoginWeb3Component.propTypes = {
  i18n: PropTypes.func.isRequired,
};

export default connect(
  state => ({ i18n: getTranslator(state) })
)(LoginWeb3Component);
