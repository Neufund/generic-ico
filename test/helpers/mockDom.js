import { JSDOM } from 'jsdom';

export const { window } = new JSDOM('<!DOCTYPE html><html><body></body></html>');

export const document = window.document;

export const navigator = {
  userAgent: 'node.js',
};

export const installMockDom = (target = global) => {
  /* eslint-disable no-param-reassign */
  target.document = document;
  target.window = window;
  target.navigator = navigator;

  Object.keys(document.defaultView).forEach((property) => {
    if (typeof target[property] === 'undefined') {
      target[property] = document.defaultView[property];
    }
  });
  /* eslint-enable no-param-reassign */
};
