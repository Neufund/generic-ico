import { combineReducers } from 'redux';
import { routerReducer as router } from 'redux-router-kit';
import translation from './translation';

export default combineReducers({
  router,
  translation,
});
