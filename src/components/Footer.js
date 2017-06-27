import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTranslator } from '../reducers/translation';

import styles from './Footer.scss';
import common from '../styles/common.scss';

const FooterComponent = ({ i18n }) => (
  <footer className={styles.footerContainer}>
    <div className={common.layoutWidthLimiter}>
      <div className={styles.footer}>
        &copy; {i18n('Fifth Force')}
      </div>
    </div>
  </footer>);

FooterComponent.propTypes = {
  i18n: PropTypes.func.isRequired,
};

export default connect(state => ({
  i18n: getTranslator(state),
}))(FooterComponent);
