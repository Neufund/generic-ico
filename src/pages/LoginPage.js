import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import HeaderUnauthenticated from '../components/HeaderUnauthenticated';
import Footer from '../components/Footer';
import Login2FA from '../components/Login2FA';
import LoginWeb3 from '../components/LoginWeb3';
import LoginNeuKey from '../components/LoginNeuKey';

import { column } from './LoginPage.scss';
import common from '../styles/common.scss';

export default () =>
  (<div className={common.layoutAppContainer}>
    <HeaderUnauthenticated />
    <div className={`${common.layoutContentArea} ${common.gradientContentArea}`}>
      <div className={common.layoutWidthLimiter}>
        <Grid fluid>
          <Row>
            <Col lgOffset={1} lg={10}>
              <Grid fluid>
                <Row>
                  <Col lg={4}>
                    <div className={`${common.whiteArea} ${column}`}>
                      <Login2FA />
                    </div>
                  </Col>
                  <Col lg={4}>
                    <div className={`${common.whiteArea} ${column}`}>
                      <LoginWeb3 />
                    </div>
                  </Col>
                  <Col lg={4}>
                    <div className={`${common.whiteArea} ${column}`}>
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
