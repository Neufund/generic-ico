/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createRouterMiddleware, RouterHistoryContainer, routeTo } from 'redux-router-kit';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import reduxLogger from 'redux-logger';
import reducer from './reducers';
import appRoutes from './routes';
import { deepfreeze } from './utils';
import muiTheme from './muiTheme';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const root = document.getElementById('react-root');

const render = (store, routes) => {
  const NotFound = routes['/not-found'];
  ReactDOM.render(
    <MuiThemeProvider muiTheme={muiTheme}>
      <Provider store={store}>
        <RouterHistoryContainer
          routes={routes}
          renderNotFound={() => {
            store.dispatch(routeTo('/not-found'));
            return <NotFound />;
          }}
        />
      </Provider>
    </MuiThemeProvider>,
    root
  );
};

const enhancers = routes =>
  composeWithDevTools(
    applyMiddleware(thunkMiddleware, createRouterMiddleware({ routes }), reduxLogger)
  );

// Create the Redux store
const store = createStore(reducer, enhancers(appRoutes));

// Add development time features
if (process.env.NODE_ENV !== 'production') {
  /* eslint-disable import/no-extraneous-dependencies */
  /* eslint-disable global-require */

  // Enable React Debug Tool
  const ReactDebugTool = require('react-dom/lib/ReactDebugTool');
  ReactDebugTool.beginProfiling();

  // Deep freeze all reducer state
  // (this prevents accidental state modification)
  const reducerWrap = next => (...args) => deepfreeze(next(...args));
  store.replaceReducer(reducerWrap(reducer));

  // Enable Webpack hot module replacement
  if (module.hot) {
    // Replace reducers
    module.hot.accept('./reducers', () => {
      const newReducer = require('./reducers').default;
      store.replaceReducer(reducerWrap(newReducer));
    });

    // Replace routes and components
    module.hot.accept('./routes', () => {
      const newAppRoutes = require('./routes').default;
      // NOTE: We don't update the store middleWare,
      //       if you change routes you need to refresh.
      render(store, newAppRoutes);
    });
  }

  /* eslint-enable import/no-extraneous-dependencies */
  /* eslint-enable global-require */
}

render(store, appRoutes);
