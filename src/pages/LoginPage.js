import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import HeaderInitial from '../components/HeaderInitial';
import Footer from '../components/Footer';
import Login2FA from '../components/Login2FA';
import LoginWeb3 from '../components/LoginWeb3';
import LoginNeuKey from '../components/LoginNeuKey';

import styles from './LoginPage.scss';

export default () =>
  (<div>
    <HeaderInitial />
    <div className={styles.main}>
      <Grid fluid>
        <Row>
          <Col lgOffset={1} lg={10}>
            <Row>
              <Col lg={4}><Login2FA /></Col>
              <Col lg={4}><LoginWeb3 /></Col>
              <Col lg={4}><LoginNeuKey /></Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    </div>
    <Footer />
  </div>);
