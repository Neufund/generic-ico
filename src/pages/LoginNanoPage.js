import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-flexbox-grid';
import HeaderProfileContext from '../components/HeaderProfileContext';
import Footer from '../components/Footer';
import ProcessIndicator from '../components/ProcessIndicator';

import { getTranslator } from '../reducers/translation';

import nano1 from '../images/tutorial-NANO-1.png';
import nano2 from '../images/tutorial-NANO-2.png';
import nano3 from '../images/tutorial-NANO-3.png';

import styles from './LoginNanoPage.scss';
import common from '../styles/common.scss';

const LoginNanoPageComponent = ({ i18n }) =>
  (<div className={common.layoutAppContainer}>
    <HeaderProfileContext />
    <ProcessIndicator
      stepsTotal={2}
      stepNumber={1}
      stepName="Logging in with NeuKey"
    />
    <div className={common.layoutContentArea}>
      <div className={common.layoutWidthLimiter}>
        <Grid fluid>
          <Row>
            <Col lgOffset={1} lg={10}>
              <Grid fluid>
                <Row>
                  <Col lg={4}>
                    <div className={styles.columnArea}>
                      <img src={nano1} alt="" />
                      <h2>{i18n('Step 1')}</h2>
                      <p>{i18n('To authenticate with the Ledger Nano connect the hardware into USB and prepare your PIN code for the device')}</p>
                    </div>
                  </Col>
                  <Col lg={4}>
                    <div className={styles.columnArea}>
                      <img src={nano2} alt="" />
                      <h2>{i18n('Step 2')}</h2>
                      <p>{i18n('Enter PIN code – use left and right key enter numbers and press two keys at the same time to confirm')}</p>
                    </div>
                  </Col>
                  <Col lg={4}>
                    <div className={styles.columnArea}>
                      <img src={nano3} alt="" />
                      <h2>{i18n('Step 3')}</h2>
                      <p>{i18n('Pick the Ethereum app – after placing the Ethereum icon in the middle of the Nano Screen press two keys at the same time to confirm')}</p>
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
