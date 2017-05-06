import { JSDOM } from 'jsdom';

const { window } = new JSDOM('<!DOCTYPE html><html><body></body></html>');

const document = window.document;

const navigator = {
  userAgent: 'node.js',
};

global.document = document;
global.window = window;
global.navigator = navigator;

Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    global[property] = document.defaultView[property];
  }
});
