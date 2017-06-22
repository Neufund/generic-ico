import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { routeTo } from 'redux-router-kit';
import { getTranslator } from '../reducers/translation';
import { RoundHeaderButton } from './Buttons';

import styles from './HeaderUnauthenticated.scss';
import common from '../styles/common.scss';

// TODO: HeaderRegistration and HeaderUnauthenticated are similar we could do generic component.
// Consult details of design with Ola font sizes and column widths etc.

const HeaderUnauthenticatedComponent = ({ i18n, onCreateAccountClick }) =>
  (<header>
    <div className={common.layoutWidthLimiter}>
      <div className={styles.header}>
        <Grid fluid>
          <Row>
            <Col lg={1} className={styles.logoContainer}>
              <div className={styles.logo} />
            </Col>
            <Col lg={8} className={styles.mainArea}>
              <div className={styles.title}>
                {i18n('Neufund Platform')}
              </div>
              <div className={styles.status}>
                {i18n('Log in')}
              </div>
            </Col>
            <Col lg={3} className={styles.createButton}>
              <RoundHeaderButton onClick={onCreateAccountClick}>
                {i18n('Create an account')}
              </RoundHeaderButton>
            </Col>
          </Row>
        </Grid>
      </div>
    </div>
  </header>);

HeaderUnauthenticatedComponent.propTypes = {
  i18n: PropTypes.func.isRequired,
  onCreateAccountClick: PropTypes.func.isRequired,
};

export default connect(
  state => ({ i18n: getTranslator(state) }),
  dispatch => ({ onCreateAccountClick: () => dispatch(routeTo('/register')) })
)(HeaderUnauthenticatedComponent);
