import React from 'react';
import Layout from './views/Layout';
import QuotedStartups from './views/QuotedStartups';
import Login from './views/Login';
import LoginNano from './views/LoginNano';
import RegisterEmail from './views/RegisterEmail';
import ConfirmEmail from './views/ConfirmEmail';
import KYC from './views/KYC';
import NotFound from './views/NotFound';

const MainPage = () => (
  <Layout>
    <QuotedStartups />
  </Layout>
);

const LoginPage = () => (
  <Layout>
    <Login />
  </Layout>
);

const LoginNanoPage = () => (
  <Layout>
    <LoginNano />
  </Layout>
);

const RegisterEmailPage = () => (
  <Layout>
    <RegisterEmail />
  </Layout>
);

const ConfirmationEmailPage = () => (
  <Layout>
    <ConfirmEmail />
  </Layout>
);

const KYCPage = () => (
  <Layout>
    <KYC />
  </Layout>
);

const NotFoundPage = () => (
  <Layout>
    <NotFound />
  </Layout>
);

// Routes for redux-router-kit
const routes = {
  '/': MainPage,
  '/login': LoginPage,
  '/login/nano': LoginNanoPage,
  '/register/email': RegisterEmailPage,
  '/register/email/:confirmationId': ConfirmationEmailPage,
  '/kyc': KYCPage,
  '/not-found': NotFoundPage,
};

export default routes;
