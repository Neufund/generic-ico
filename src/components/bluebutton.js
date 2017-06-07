import React from 'react';
import PropTypes from 'prop-types';

import styles from './bluebutton.scss';

const Button = ({ targetTo, children, label, ...props }) =>
(
  <button
    className={styles.Button}
    tabIndex="-1"
    {...props}
    onClick={() => { targetTo(); }}
  >
    {children}
  </button>
  );

Button.propTypes = {
  targetTo: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

module.exports = Button;

// TODO: <Add additional abstractions colors modes>
// TODO: <Look into containers or stand alone>
