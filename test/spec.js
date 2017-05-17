/* eslint-disable import/first */
import './helpers/mockDom';
import { makeConsoleThrow, restoreConsole } from './helpers/throwingConsole';

beforeEach(() => {
  makeConsoleThrow();
});

afterEach(() => {
  restoreConsole();
});
