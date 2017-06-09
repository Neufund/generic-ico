import React from 'react';
import PropTypes from 'prop-types';
import styles from '../components/Buttons.scss';

const ButtonCreator = (type) => {
  const Button = ({ onClick, children, tabIndex, ...props }) => (
    <button
      className={type}
      tabIndex={tabIndex}
      {...props}
      onClick={() => onClick()}
    >
      {children}
    </button>);

  Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    tabIndex: PropTypes.string.isRequired,
    button: PropTypes.string.isRequired,
  };

  Button.defaultProps = {
    tabIndex: '0',
  };
  return Button;
};

export const SquareButton = ButtonCreator(styles.squarebutton);
export const RoundButton = ButtonCreator(styles.roundbluebutton);
export const RoundHeaderBut = ButtonCreator(styles.roundbluebuttonheader);
export const BorderButton = ButtonCreator(styles.blueborderbutton);
