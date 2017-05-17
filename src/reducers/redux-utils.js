import { objectMap } from '../utils';

export const makeCreators = reducers =>
  objectMap(reducers, (_, type) => (...payload) => ({ type, payload }));

export const makeReducer = (reducers, initialState) => (state = initialState, { type, payload }) =>
  reducers[type] ? reducers[type](state, ...payload) : state;
