import { normalize } from 'normalizr';
import { createSelector } from 'reselect';
import { makeCreators, makeReducer } from './redux-utils';
import { fetchAction } from './network';

const objectMerge = merge => (a = {}, b = {}) =>
  Object.keys({ ...a, ...b }).reduce(
    (others, key) => ({
      ...others,
      [key]: merge(a[key], b[key]),
    }),
    {}
  );

const preferDefined = next => (a, b) => {
  if (a === undefined) return b;
  if (b === undefined) return a;
  return next(a, b);
};

const initialState = {};

const reducers = {
  update: (state, entities) =>
    objectMerge(
      state,
      entities,
      preferDefined((classA, classB) =>
        objectMerge(classA, classB, (instanceA, instanceB) => instanceB)
      )
    ),
};

export const reducer = makeReducer(reducers, initialState);
export const creators = makeCreators(reducers);
export const { update } = creators;
export default reducer;

export const queryAction = (url, schema) => async (dispatch) => {
  const json = await dispatch(fetchAction(url));
  const normalized = normalize(json, schema);
  await dispatch(update(normalized.entities));
  return normalized.result;
};

// Higher-order selector taking a kind (entity type)
// TODO: Re-use instances so there is only one per kind
export const getAllSelectorCreator = kind =>
  createSelector([state => state.entities], entities => (kind in entities ? entities[kind] : {}));

// Higher-order selector taking a kind and an instance id or an array of ids
export const getSelectorCreator = (kind, idSelector) =>
  createSelector(
    [getAllSelectorCreator(kind), idSelector],
    (instances, ids) => (Array.isArray(ids) ? ids.map(id => instances[id]) : instances[ids])
  );
