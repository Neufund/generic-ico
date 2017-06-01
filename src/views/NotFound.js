import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import { Toolbar } from 'material-ui/Toolbar';
import { getTranslator } from '../reducers/translation';

export const NotFoundComponent = ({ i18n }) => (
  <div>
    <AppBar title={i18n('To do')} iconClassNameRight="muidocs-icon-navigation-expand-more" />
    <Toolbar />
    <h1>Not Found</h1>
    <p>The requested page was not found</p>
  </div>
);

NotFoundComponent.propTypes = {
  i18n: PropTypes.func.isRequired,
};

export default connect(state => ({
  i18n: getTranslator(state),
}))(NotFoundComponent);
