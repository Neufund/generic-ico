import React from 'react';
import PropTypes from 'prop-types';

import styles from './bluebutton.scss';

const Button = ({ targetTo, label, ...props }) =>
(
  <div
    className={styles.our_button}
    role="button"
    tabIndex="-1"
    {...props}
    onClick={(event) => {
      event.preventDefault();
      targetTo();
    }}
  >
    {label}
  </div>
  );

Button.propTypes = {
  targetTo: PropTypes.func.isRequired,
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
