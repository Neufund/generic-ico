import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { routeTo } from 'redux-router-kit';

const LinkView = ({ targetTo, children, path, tabIndex, ...props }) =>
  (<a
    tabIndex={tabIndex}
    role="link"
    {...props}
    onClick={(event) => {
      event.preventDefault();
      targetTo(path);
    }}
  >{children}</a>);

LinkView.propTypes = {
  targetTo: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  tabIndex: PropTypes.string.isRequired,
};

LinkView.defaultProps = {
  tabIndex: '0',
};

export default connect(
  null,
  dispatch => ({
    targetTo: path => dispatch(routeTo(path)),
  })
)(LinkView);
