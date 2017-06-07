import React from 'react';
import PropTypes from 'prop-types';

import styles from './bluebutton.scss';

const Button = ({ label, ...props }) => (
  <div
    className={styles.our_button}
    {...props}
  >
    {label}
  </div>);

Button.propTypes = {
  label: PropTypes.string.isRequired,
};

Button.defaultProps = {
  label: 'Name me!',
};

module.exports = Button;

// todo: Add Flex box integration
//       Add SASS implemenation
//       Add additional abstractions
//       Look into containers or stand alone
