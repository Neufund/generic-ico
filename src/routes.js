import React from 'react';
import Layout from './views/Layout';
import QuotedStartups from './views/QuotedStartups';
import Login from './views/Login';
import LoginEmail from './views/LoginEmail';
import LoginNano from './views/LoginNano';
import RegisterEmail from './views/RegisterEmail';
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

const LoginEmailPage = () => (
  <Layout>
    <LoginEmail />
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
  '/login/email': LoginEmailPage,
  '/login/nano': LoginNanoPage,
  '/registar/email': RegisterEmailPage,
  '/kyc': KYCPage,
  '/not-found': NotFoundPage,
};

export default routes;
