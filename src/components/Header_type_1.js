import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { getTranslator } from '../reducers/translation';
import { RoundHeaderButton } from './Buttons';

import styles from './Header_type_1.scss';
import common from '../styles/common.scss';

const HeaderInitialComponent = ({ i18n }) =>
  (<header>
    <div className={common.widthLimiter}>
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
            <Col lg={3}>
              <RoundHeaderButton style={{ display: 'inline-block' }}>
                {i18n('Create an account')}
              </RoundHeaderButton>
            </Col>
          </Row>
        </Grid>
      </div>
    </div>
  </header>);

HeaderInitialComponent.propTypes = {
  i18n: PropTypes.func.isRequired,
};

export default connect(state => ({
  i18n: getTranslator(state),
}))(HeaderInitialComponent);
