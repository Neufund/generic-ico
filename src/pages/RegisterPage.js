import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import HeaderRegistration from '../components/HeaderRegistration';
import { SquareButton } from '../components/Buttons';
import TextField from '../components/FieldText';
import Footer from '../components/Footer';
import common from '../styles/common.scss';
import RegisterPage from './RegisterPage.scss';

export const RegisterFormView = ({ handleSubmit }) =>
  (<div className={common.layoutAppContainer}>
    <HeaderRegistration />
    <div className={`${common.layoutContentArea} ${common.gradientContentArea}`}>
      <div className={common.layoutWidthLimiter}>

        <Grid fluid>
          <Row>
            <Col lgOffset={3} lg={6}>
              <div className={common.whiteArea}>
                <div className={RegisterPage.columnArea}>
                  <h2>Create your private account first</h2>
                  <form onSubmit={handleSubmit}>
                    <p>
                      <TextField name={'firstname'} type={'text'} placeholder={'Choose your most reliable email address'} />
                    </p>
                    <SquareButton type={'submit'} > Get started </SquareButton>
                    <p> Bt </p>
                  </form>
                </div>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
      <Footer />
    </div>
  </div>);

RegisterFormView.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export const LoginForm = reduxForm({
  form: 'RegisterForm', // a unique identifier for this form
})(RegisterFormView);

export default LoginForm;
