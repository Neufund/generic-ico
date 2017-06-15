import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { routeTo } from 'redux-router-kit';
import { getTranslator } from '../reducers/translation';
import { RoundHeaderButton } from './Buttons';

import styles from './Header_type_1.scss';
import common from '../styles/common.scss';

const HeaderType1Component = ({ i18n, targetTo }) =>
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
            <Col lg={3} className={styles.createButton}>
              { /* TODO: hardcoding link is not best idea. There is discussion how this can be
                changed - https://github.com/Neufund/generic-ico/pull/21#discussion_r121947303 */}
              <RoundHeaderButton onClick={() => targetTo('/register')}>
                {i18n('Create an account')}
              </RoundHeaderButton>
            </Col>
          </Row>
        </Grid>
      </div>
    </div>
  </header>);

HeaderType1Component.propTypes = {
  i18n: PropTypes.func.isRequired,
  targetTo: PropTypes.func.isRequired,
};

export default connect(
  state => ({ i18n: getTranslator(state) }),
  dispatch => ({ targetTo: path => dispatch(routeTo(path)) })
)(HeaderType1Component);
