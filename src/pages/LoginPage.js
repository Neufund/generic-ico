import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-flexbox-grid';
import HeaderUnauthenticated from '../components/HeaderUnauthenticated';
import Footer from '../components/Footer';
import Login2FA from '../components/Login2FA';
import LoginRecoveryCode from '../components/LoginRecoveryCode';
import LoginWeb3 from '../components/LoginWeb3';
import LoginNeuKey from '../components/LoginNeuKey';
import { do2FASubmit, doRecoveryCodeSubmit, setPreferredLoginMethod } from '../reducers/authenticate';

import { column } from './LoginPage.scss';
import common from '../styles/common.scss';

const LoginPageComponent = ({ showRecoveryCode, showAllWaysToLogin, onShowAllClick, on2FASubmit,
                              onRecoverySubmit }) =>
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
                      { showRecoveryCode ?
                        <LoginRecoveryCode
                          onSubmit={onRecoverySubmit}
                          onShowAllClick={onShowAllClick}
                          hideShowAll={showAllWaysToLogin}
                        />
                        :
                        <Login2FA
                          onSubmit={on2FASubmit}
                          onShowAllClick={onShowAllClick}
                          hideShowAll={showAllWaysToLogin}
                        />
                      }
                    </div>
                  </Col>
                  { showAllWaysToLogin &&
                  <Col lg={4}>
                    <div className={`${common.whiteArea} ${column}`}>
                      <LoginWeb3 />
                    </div>
                  </Col>
                  }
                  { showAllWaysToLogin &&
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
  showRecoveryCode: PropTypes.bool,
  showAllWaysToLogin: PropTypes.bool,
  onShowAllClick: PropTypes.func.isRequired,
  on2FASubmit: PropTypes.func.isRequired,
  onRecoverySubmit: PropTypes.func.isRequired,
};

LoginPageComponent.defaultProps = {
  showRecoveryCode: false,
  showAllWaysToLogin: true,
};

export default connect(
  state => ({
    showRecoveryCode: state.authenticate.currentLoginMethodStep === 'RecoveryCode',
    showAllWaysToLogin: state.authenticate.preferredLoginMethod !== '2FA',
  }),
  dispatch => ({
    onShowAllClick: () => dispatch(setPreferredLoginMethod(null)),
    on2FASubmit: formFields => dispatch(do2FASubmit(formFields)),
    onRecoverySubmit: formFields => dispatch(doRecoveryCodeSubmit(formFields)),
  })
)(LoginPageComponent);
