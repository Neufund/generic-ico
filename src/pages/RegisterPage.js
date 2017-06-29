import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import HeaderRegistration from '../components/HeaderRegistration';
import { SquareButton } from '../components/Buttons';
import TextField from '../components/FieldText';
import Footer from '../components/Footer';
import common from '../styles/common.scss';
import RegisterPageStyle from './RegisterPage.scss';

export const RegisterFormView = ({ handleSubmit }) =>
  (<div className={common.layoutAppContainer}>
    <HeaderRegistration />
    <div className={`${common.layoutContentArea} ${common.gradientContentArea}`}>
      <div className={common.layoutWidthLimiter}>

        <Grid fluid>
          <Row>
            <Col lgOffset={3} lg={6}>
              <div className={common.whiteArea}>
                <div className={RegisterPageStyle.columnArea}>
                  <h2>Create your private account first</h2>
                  <form onSubmit={handleSubmit}>
                    <TextField name={'firstname'} style={{ width: '75%', paddingLeft: '2rem' }} type={'text'} placeholder={'Choose your most reliable email address'} />
                    <SquareButton type={'submit'} > Get started </SquareButton>
                    <p style={{ width: '65%', marginLeft: '6rem' }}> By clicking get started you agree to Neufunds
                        Platforms Terms of service and Privacy Policy</p>
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

export const RegisterForm = reduxForm({
  form: 'RegisterForm', // a unique identifier for this form
})(RegisterFormView);

export const RegisterPageInstance = () =>
  <RegisterForm onSubmit={console.log} />;

export default RegisterPageInstance;
