import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { routeTo } from 'redux-router-kit';
import { getTranslator } from '../reducers/translation';
import { BorderHeaderButton } from './Buttons';

import styles from './HeaderRegistration.scss';
import common from '../styles/common.scss';

// TODO: HeaderRegistration and HeaderUnauthenticated are similar we could do generic component.
// Consult details of design with Ola font sizes and column widths etc.

const HeaderRegistrationComponent = ({ i18n, onLogInClick }) =>
  (<header>
    <div className={common.layoutWidthLimiter}>
      <div className={styles.header}>
        <Grid fluid>
          <Row>
            <Col lg={1} className={styles.logoContainer}>
              <div className={styles.logo} />
            </Col>
            <Col lg={9} className={styles.mainArea}>
              <div className={styles.title}>
                {i18n('Neufund Platform')}
              </div>
              <div className={styles.status}>
                {i18n('Already registered?')}
              </div>
            </Col>
            <Col lg={2}>
              <BorderHeaderButton onClick={onLogInClick}>
                {i18n('Log in')}
              </BorderHeaderButton>
            </Col>
          </Row>
        </Grid>
      </div>
    </div>
  </header>);

HeaderRegistrationComponent.propTypes = {
  i18n: PropTypes.func.isRequired,
  onLogInClick: PropTypes.func.isRequired,
};

export default connect(
  state => ({ i18n: getTranslator(state) }),
  dispatch => ({ onLogInClick: () => dispatch(routeTo('/login')) })
)(HeaderRegistrationComponent);
