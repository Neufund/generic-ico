import React from 'react';
import Layout from './views/Layout';
import QuotedStartups from './views/QuotedStartups';
import ConfirmEmail from './views/ConfirmEmail';
import KYC from './views/KYC';
import Test from './views/Test';
import NotFound from './views/NotFound';

import LoginPage from './pages/LoginPage';
import LoginNanoPage from './pages/LoginNanoPage';
import LoginNanoPage2 from './pages/LoginNanoPage2';
import RegisterPage from './pages/RegisterPage';
import RegisterWelcomePage from './pages/RegisterWelcomePage';

const page = View => () => <Layout><View /></Layout>;

// Routes for redux-router-kit
const routes = {
  '/': page(QuotedStartups),
  '/test': page(Test),
  '/login': LoginPage,
  '/login/nano': LoginNanoPage,
  // TODO: /login/nano/temp is just temporary route
  '/login/nano/temp': LoginNanoPage2,
  '/register': RegisterPage,
  '/register/email/:confirmationId': page(ConfirmEmail),
  // TODO: /register/welcome is temporary route
  '/register/welcome': RegisterWelcomePage,
  '/kyc': page(KYC),
  '/not-found': page(NotFound),
};

export default routes;
