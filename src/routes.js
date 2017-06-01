import App from './components/App';
import NotFound from './components/NotFound';
import htmllayout from './components/htmllayout';


// Routes for redux-router-kit
const routes = {
  '/': App,
  '/not-found': NotFound,
  '/layout': htmllayout,
};

export default routes;
