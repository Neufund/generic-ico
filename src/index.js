/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './App';

if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require
  const ReactDebugTool = require('react-dom/lib/ReactDebugTool');
  ReactDebugTool.beginProfiling();
}

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>,
  document.getElementById('react-root')
);
