import React from 'react';
import Layout from './views/Layout';
import QuotedStartups from './views/QuotedStartups';
import ConfirmEmail from './views/ConfirmEmail';
import KYC from './views/KYC';
import Test from './views/Test';
import NotFound from './views/NotFound';

import LoginPage from './pages/LoginPage';
import LoginNanoPage from './pages/LoginNanoPage';
import RegisterPage from './pages/RegisterPage';

const page = View => () => <Layout><View /></Layout>;

// Routes for redux-router-kit
const routes = {
  '/': page(QuotedStartups),
  '/test': page(Test),
  '/login': LoginPage,
  '/login/nano': LoginNanoPage,
  '/register': RegisterPage,
  '/register/email/:confirmationId': page(ConfirmEmail),
  '/kyc': page(KYC),
  '/not-found': page(NotFound),
};

export default routes;
