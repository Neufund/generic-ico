const objectMap = (obj, map) =>
  Object.keys(obj).reduce(
    (others, key) => ({
      ...others,
      [key]: map(obj[key], key),
    }),
    {}
  );

export const makeCreators = reducers =>
  objectMap(reducers, (_, type) => (...payload) => ({ type, payload }));

export const makeReducer = (reducers, initialState) => (state = initialState, { type, payload }) =>
  reducers[type] ? reducers[type](state, ...payload) : state;
