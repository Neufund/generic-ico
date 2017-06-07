import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.scss';

const Button = ({ onClick, children, ...props }) =>
(
  <button
    className={styles.Button}
    tabIndex="-1"
    {...props}
    onClick={() => onClick()}
  >
    {children}
  </button>
  );

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

module.exports = Button;

// TODO: Add additional abstractions colors modes
// TODO: Look into containers or stand alone
