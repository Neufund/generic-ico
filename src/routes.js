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

const page = View => () => <Layout><View /></Layout>;

const entryPage = View => () => <LayoutEntry><View /></LayoutEntry>;

// Routes for redux-router-kit
const routes = {
  '/': page(QuotedStartups),
  '/test': page(Test),
  '/login': entryPage(Login),
  '/login/nano': page(LoginNano),
  '/register': page(Register),
  '/register/email/:confirmationId': page(ConfirmEmail),
  '/kyc': page(KYC),
  '/not-found': page(NotFound),
};

export default routes;
