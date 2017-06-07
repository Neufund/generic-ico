import React from 'react';
import Layout from './views/Layout';
import LayoutEntry from './views/LayoutEntry';
import QuotedStartups from './views/QuotedStartups';
import Login from './views/Login';
import LoginNano from './views/LoginNano';
import Register from './views/Register';
import ConfirmEmail from './views/ConfirmEmail';
import KYC from './views/KYC';
import Test from './views/Test';
import NotFound from './views/NotFound';

const MainPage = () => (
  <Layout>
    <QuotedStartups />
  </Layout>
);

const TestPage = () => (
  <Layout>
    <Test />
  </Layout>
);

const LoginPage = () => (
  <LayoutEntry>
    <Login />
  </LayoutEntry>
);

const LoginNanoPage = () => (
  <Layout>
    <LoginNano />
  </Layout>
);

const RegisterPage = () => (
  <Layout>
    <Register />
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
  '/test': TestPage,
  '/login': LoginPage,
  '/login/nano': LoginNanoPage,
  '/register': RegisterPage,
  '/register/email/:confirmationId': ConfirmationEmailPage,
  '/kyc': KYCPage,
  '/not-found': NotFoundPage,
};

export default routes;
