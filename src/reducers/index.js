import { combineReducers } from 'redux';
import { routerReducer as router } from 'redux-router-kit';
import { reducer as form } from 'redux-form';
import translation from './translation';
import network from './network';
import entities from './entities';
import web3 from './web3';

export default combineReducers({
  router,
  form,
  translation,
  network,
  entities,
  web3,
});
