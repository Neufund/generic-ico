import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { routeTo } from 'redux-router-kit';

const LinkView = ({ targetTo, text, path }) =>
  (<a
    tabIndex="0"
    role="link"
    onClick={(event) => {
      event.preventDefault();
      targetTo(path);
    }}
  >{text}</a>);

LinkView.propTypes = {
  targetTo: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default connect(
  null,
  dispatch => ({
    targetTo: id => dispatch(routeTo(id)),
  })
)(LinkView);
