import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTranslator } from '../reducers/translation';

const styleme = {
  size: '4em',
  weight: 'bold',
  fontSize: '4em',
};
const table = {
  height: '50px',
  width: '800px',
  background: '#09719B',
  margin: 'auto 0',
};
const text = {
  height: '19px',
  width: '108px',
  color: '#8FA2AB',
  font: 'Montserrat',
  size: '15px',
};

export const NotFoundComponent = ({ i18n }) => (
  <div className="flex-container">
    <div className="flex-item">{i18n('flex item 1')}</div>
    <div className="flex-item">flex item 2</div>
    <div className="flex-item">flex item 3</div>
  </div>
);

NotFoundComponent.propTypes = {
  i18n: PropTypes.func.isRequired,
};

export default connect(state => ({
  i18n: getTranslator(state),
}))(NotFoundComponent);
