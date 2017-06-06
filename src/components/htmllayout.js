import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTranslator } from '../reducers/translation';
import Button from './bluebutton';

export const NotFoundComponent = ({ i18n }) => (

  <div className="flex-container">
    <div className="flex-item">{i18n('flex item 1')}</div>
    <div className="flex-item">flex item 2</div>
    <div className="flex-item">flex item 3</div>
    <Button />
  </div>
);

NotFoundComponent.propTypes = {
  i18n: PropTypes.func.isRequired,
};

export default connect(state => ({
  i18n: getTranslator(state),
}))(NotFoundComponent);
