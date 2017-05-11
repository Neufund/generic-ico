/* global fetch */
import 'isomorphic-fetch';
import { createSelector } from 'reselect';
import { makeCreators, makeReducer } from './redux-utils';

const initialState = {
  fetching: [],
  failures: {},
};

const reducers = {
  request: (state, url) => ({
    ...state,
    fetching: [...state.fetching, url],
  }),
  success: (state, url) => ({
    ...state,
    fetching: state.fetching.filter(u => u !== url),
  }),
  failure: (state, url, error) => ({
    ...state,
    fetching: state.fetching.filter(u => u !== url),
    failures: {
      ...state.failures,
      [url]: error,
    },
  }),
  dismiss: (state, url) => ({
    ...state,
    failures: Object.keys(state.failures)
      .filter(u => u !== url)
      .reduce((others, key) => ({ ...others, [key]: state.failures[key] }), {}),
  }),
};

export const reducer = makeReducer(reducers, initialState);
export const creators = makeCreators(reducers);
export const { request, success, failure, dismiss } = creators;
export default reducer;

export const isFetching = createSelector(
  [state => state.network.fetching],
  fetching => fetching.length === 0
);

// Action creator for fetch operations
export const fetchAction = url => async (dispatch) => {
  try {
    await dispatch(request(url));
    const response = await fetch(url);
    const json = await response.json();
    await dispatch(success(url));
    return json;
  } catch (error) {
    await dispatch(failure(url, error));
    throw error;
  }
};
