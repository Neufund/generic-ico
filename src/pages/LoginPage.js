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

import { column } from './LoginPage.scss';
import common from '../styles/common.scss';

const LoginPageComponent = ({ showRecoveryCode, onShowAllClick, showAllWaysToLogin }) =>
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
                          onShowAllClick={onShowAllClick}
                          hideShowAll={showAllWaysToLogin}
                        />
                        :
                        <Login2FA
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
};

LoginPageComponent.defaultProps = {
  showRecoveryCode: true,
  showAllWaysToLogin: true,
};

// eslint-disable-next-line react/prefer-stateless-function
class LoginPageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAllWaysToLogin: !props.returningUser,
    };
    this.onShowAllClick = this.onShowAllClick.bind(this);
  }

  onShowAllClick() {
    this.setState({
      showAllWaysToLogin: true,
    });
  }

  render() {
    return (<LoginPageComponent
      onShowAllClick={this.onShowAllClick}
      showAllWaysToLogin={this.state.showAllWaysToLogin}
    />);
  }
}

LoginPageContainer.propTypes = {
  returningUser: PropTypes.bool,
};

LoginPageContainer.defaultProps = {
  returningUser: false,
};

// eslint-disable-next-line no-unused-vars
const getReturningUser = state => true;

export default connect(
  state => ({ returningUser: getReturningUser(state) })
)(LoginPageContainer);
