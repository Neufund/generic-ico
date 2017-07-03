import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTranslator } from '../reducers/translation';
import HeaderRegistration from '../components/HeaderRegistration';
import { SquareButton } from '../components/Buttons';
import TextField from '../components/FieldText';
import Footer from '../components/Footer';
import common from '../styles/common.scss';
import RegisterPageStyle from './RegisterPage.scss';
import { LoginLink } from '../components/PredefinedLinks';

export const RegisterFormView = ({ handleSubmit, i18n }) =>
  (<div className={common.layoutAppContainer}>
    <HeaderRegistration />
    <div className={`${common.layoutContentArea} ${common.gradientContentArea}`}>
      <div className={common.layoutWidthLimiter}>
        <Grid fluid>
          <Row>
            <Col lgOffset={3} lg={6}>
              <div className={common.whiteArea}>
                <div className={RegisterPageStyle.columnArea}>
                  <h2>{i18n('Create your private account first')}</h2>
                  <form onSubmit={handleSubmit}>
                    <TextField
                      name={'email'}
                      style={{
                        marginLeft: '2rem',
                        borderDown: '0.2rem',
                        display: 'block',
                        width: '70%' }}
                      type={'text'}
                      placeholder={i18n('Choose your most reliable email address')}
                    />
                    <SquareButton type={'submit'} > Get started </SquareButton>
                    <p> {i18n('By clicking get started you agree to Neufunds Platforms')}
                      <LoginLink>{i18n('Terms of service')}</LoginLink> {i18n('and')} <LoginLink>
                        {i18n('Privacy Policy')}</LoginLink></p>
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
  i18n: PropTypes.func.isRequired,
};

export const RegisterForm = reduxForm({
  form: 'RegisterForm', // a unique identifier for this form
})(RegisterFormView);

export const RegisterPageInstance = ({ i18n }) =>
  <RegisterForm onSubmit={console.log} i18n={i18n} />;

RegisterPageInstance.propTypes = {
  i18n: PropTypes.func.isRequired,
};

export default connect(
  state => ({ i18n: getTranslator(state) })
)(RegisterPageInstance);
