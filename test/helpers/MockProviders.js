import React from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const MockProviders = ({ children }) => (
  <MuiThemeProvider>
    {children}
  </MuiThemeProvider>
);

MockProviders.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MockProviders;
