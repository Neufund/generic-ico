import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.scss';

const Button = ({ callback, children, ...props }) =>
(
  <button
    className={styles.Button}
    tabIndex="-1"
    {...props}
    onClick={() => callback()}
  >
    {children}
  </button>
  );

Button.propTypes = {
  callback: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

module.exports = Button;

// TODO: Add additional abstractions colors modes
// TODO: Look into containers or stand alone
