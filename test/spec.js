import injectTapEventPlugin from 'react-tap-event-plugin';
import { makeConsoleThrow, restoreConsole } from './helpers/throwingConsole';
import { installMockDom } from './helpers/mockDom';

// mocha --watch will call this file repeatedly
if (!global.document) {
  // Create fake window and document objects in global namespace
  installMockDom();

  // Needed for onTouchTap
  // http://stackoverflow.com/a/34015469/988941
  injectTapEventPlugin();
}

beforeEach(() => {
  makeConsoleThrow();
});

afterEach(() => {
  restoreConsole();
});
