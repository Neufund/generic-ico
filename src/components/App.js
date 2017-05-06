import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import { Toolbar } from 'material-ui/Toolbar';
import { getTranslator } from '../reducers/translation';

export const AppComponent = ({ i18n }) => (
  <div>
    <AppBar title={i18n('To do')} iconClassNameRight="muidocs-icon-navigation-expand-more" />
    <Toolbar />
  </div>
);

AppComponent.propTypes = {
  i18n: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    i18n: getTranslator(state),
  }),
  () => ({})
)(AppComponent);
