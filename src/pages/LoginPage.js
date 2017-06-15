import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Header from '../components/Header_type_1';
import Footer from '../components/Footer';
import Login2FA from '../components/Login2FA';
import LoginWeb3 from '../components/LoginWeb3';
import LoginNeuKey from '../components/LoginNeuKey';

import styles from './LoginPage.scss';
import common from '../styles/common.scss';

export default () =>
  (<div className={common.appContainer}>
    <Header />
    <div className={common.contentArea}>
      <div className={common.widthLimiter}>
        <Grid fluid>
          <Row>
            <Col lgOffset={1} lg={10}>
              <Grid fluid>
                <Row>
                  <Col lg={4}>
                    <div className={styles.columnArea}>
                      <Login2FA />
                    </div>
                  </Col>
                  <Col lg={4}>
                    <div className={styles.columnArea}>
                      <LoginWeb3 />
                    </div>
                  </Col>
                  <Col lg={4}>
                    <div className={styles.columnArea}>
                      <LoginNeuKey />
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
