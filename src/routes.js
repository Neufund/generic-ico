import Layout from './views/Layout';
import QuotedStartups from './views/QuotedStartups';
import StartupIntro from './views/StartupIntro';
import InvestorIntro from './views/InvestorIntro';
import Login from './views/Login';
import LoginEmail from './views/LoginEmail';
import LoginNano from './views/LoginNano';
import RegisterEmail from './views/RegisterEmail';
import KYC from './views/KYC';

import NotFound from './components/NotFound';

// Routes for redux-router-kit
const routes = {
  '/': {
    component: Layout,
    routes: {
      '.': {
        component: QuotedStartups,
      },
      '/startupintro': StartupIntro,
      '/investorintro/:step/': InvestorIntro,
      '/login': Login,
      '/login/email': LoginEmail,
      '/login/nano': LoginNano,
      '/registar/email': RegisterEmail,
      '/kyc': KYC,
      '/startups/quoted': QuotedStartups,
    },
  },

  '/not-found': NotFound,
};

export default routes;
