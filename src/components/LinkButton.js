import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { routeTo } from 'redux-router-kit';
import Link from '../components/LinkButton.scss';

const LinkView = ({ targetTo, children, path, tabIndex, ...props }) =>
  (<a
    className={Link.link}
    tabIndex={tabIndex}
    role="link"
    {...props}
    onClick={(event) => {
      event.preventDefault();
      targetTo(path);
    }}
    style={{ cursor: 'pointer' }}
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
