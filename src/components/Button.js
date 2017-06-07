import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.scss';

const Button = ({ onClick, children, tabIndex, ...props }) =>
(
  <button
    className={styles.Button}
    tabIndex={tabIndex}
    {...props}
    onClick={() => onClick()}
  >
    {children}
  </button>
  );

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  tabIndex: PropTypes.string.isRequired,
};

Button.defaultProps = {
  tabIndex: '0',
};
module.exports = Button;

// TODO: Add additional abstractions colors modes
// TODO: Look into containers or stand alone
