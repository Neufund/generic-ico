import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { getTranslator } from '../reducers/translation';
import HeaderProfileContext from '../components/HeaderProfileContext';
import Footer from '../components/Footer';
import ProcessIndicator from '../components/ProcessIndicator';
import Timer from '../components/Timer';
import nano from '../images/tutorial-NANO-4.png';
import styles from './LoginNanoPage.scss';
import common from '../styles/common.scss';

const LoginNanoPageComponent = ({ i18n }) =>
  (<div className={common.layoutAppContainer}>
    <HeaderProfileContext />
    <ProcessIndicator
      stepsTotal={2}
      stepNumber={2}
      stepName={i18n('Sign in logging in')}
    />
    <div className={`${common.layoutContentArea} ${styles.layout}`}>
      <div className={common.layoutWidthLimiter}>
        <Grid fluid>
          <Row>
            <Col lgOffset={4} lg={4}>
              <div className={styles.columnArea}>
                <img src={nano} alt="" />
                <h2>{i18n('Step 4')}</h2>
                <p>{i18n('Confirm logging in by pressing right key on the Ledger ')}</p>
                <Timer />
              </div>
            </Col>
          </Row>
          <Row>
            <Col lgOffset={8} lg={4}>
              <div className={styles.columnArea}>
                <p className={styles.help}>{i18n('Your NeuKey doesn’t work, you lost it or something something?')} <a href="">{i18n('Contact support')}</a></p>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
      <Footer />
    </div>
  </div>);

LoginNanoPageComponent.propTypes = {
  i18n: PropTypes.func.isRequired,
};

export default connect(
  state => ({ i18n: getTranslator(state) })
)(LoginNanoPageComponent);
