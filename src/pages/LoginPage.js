import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-flexbox-grid';
import HeaderUnauthenticated from '../components/HeaderUnauthenticated';
import Footer from '../components/Footer';
import Login2FA from '../components/Login2FA';
import LoginWeb3 from '../components/LoginWeb3';
import LoginNeuKey from '../components/LoginNeuKey';

import { column } from './LoginPage.scss';
import common from '../styles/common.scss';

// eslint-disable-next-line no-unused-vars
const getReturningUser = state => true;

const LoginPageComponent = ({ returningUser }) =>
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
                      <Login2FA returningUser={returningUser} />
                    </div>
                  </Col>
                  { !returningUser &&
                  <Col lg={4}>
                    <div className={`${common.whiteArea} ${column}`}>
                      <LoginWeb3 />
                    </div>
                  </Col>
                  }
                  { !returningUser &&
                  <Col lg={4}>
                    <div className={`${common.whiteArea} ${column}`}>
                      <LoginNeuKey />
                    </div>
                  </Col>
                  }
                </Row>
              </Grid>
            </Col>
          </Row>
        </Grid>
      </div>
      <Footer />
    </div>
  </div>);

LoginPageComponent.propTypes = {
  returningUser: PropTypes.bool,
};

LoginPageComponent.defaultProps = {
  returningUser: false,
};

export default connect(
  state => ({ returningUser: getReturningUser(state) })
)(LoginPageComponent);
