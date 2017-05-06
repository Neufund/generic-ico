import { createSelector } from 'reselect';
import Polyglot from 'node-polyglot';
import { makeCreators, makeReducer } from './redux-utils';
import C from '../../translations/C.json';

const initialState = {
  language: 'C',
  translations: C,
};

const reducers = {
  addTranslations: (state, translations) => ({
    ...state,
    translations: {
      ...state.translations,
      ...translations,
    },
  }),
  setLanguage: (state, locale) => ({
    ...state,
    locale,
  }),
};

export const reducer = makeReducer(reducers, initialState);
export const creators = makeCreators(reducers);
export const { setLanguage } = creators;
export default reducer;

export const getTranslation = createSelector(
  [state => state.translation.language, state => state.translation.translations],
  (language, translations) => translations[language]
);

export const getPolyglot = createSelector(
  [state => state.translation.language, getTranslation],
  (locale, phrases) => new Polyglot({ locale, phrases })
);

export const getTranslator = createSelector([getPolyglot], pglot => pglot.t.bind(pglot));
