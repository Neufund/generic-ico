/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
import { extractFromFiles, findUnused, findMissing } from 'i18n-extract';
import { readFileSync, writeFileSync } from 'fs';
import { po } from 'gettext-parser';

export const toPo = data =>
  po.compile({
    charset: 'utf-8',
    headers: {
      language: 'C',
      'plural-forms': 'nplurals=1; plural=0',
      'content-type': 'text/plain; charset=utf-8',
    },
    translations: {
      C: Object.keys(data).reduce(
        (obj, key) => ({
          ...obj,
          [key]: {
            msgid: data[key],
          },
        }),
        {}
      ),
    },
  });

export const fromPo = buffer =>
  (obj =>
    Object.keys(obj).filter(key => key !== '').reduce(
      (others, key) => ({
        ...others,
        [key]: obj[key].msgstr[0] || key,
      }),
      {}
    ))(po.parse(buffer).translations['']);

const poFile = './translations/C.po';
const jsonFile = './translations/C.json';

const source = extractFromFiles(['src/**/*.js', 'src/**/*.jsx'], {
  marker: 'i18n',
}).reduce((obj, key) => ({ ...obj, [key]: key }), {});

const locale = fromPo(readFileSync(poFile));
const unused = findUnused(locale, Object.keys(source)).map(obj => obj.key);
const missing = findMissing(locale, Object.keys(source)).map(obj => obj.key);

console.log('Updating C locale:');
console.log('Removed strings:', unused);
console.log('Added strings:', missing);

// Existing translations stay
const merged = {
  ...source,
  ...locale,
};

writeFileSync(poFile, toPo(merged));

// Write as json file
// FIXME: Implement as a webpack loader

writeFileSync(jsonFile, JSON.stringify({ C: merged }));
