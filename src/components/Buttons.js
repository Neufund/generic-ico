import React from 'react';
import PropTypes from 'prop-types';
import styles from '../components/Button.scss';

const buttonType = {
  square_button: styles.squarebutton,
  round_button: styles.roundbluebutton,
  round_button_header: styles.roundbluebuttonheader,
  border_button: styles.blueborderbutton,
};

const Button = ({ button, onClick, children, tabIndex, ...props }) => (
  <button
    className={buttonType[button]}
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

const ButtonCreator = (type) => {
  const func = ({ children, ...props }) => <Button {...props} button={type}>{children}</Button>;
  func.propTypes = {
    children: PropTypes.node.isRequired,
  };
  return func;
};

export const SquareButton = ButtonCreator('square_button');
export const RoundButton = ButtonCreator('round_button');
export const RoundHeaderBut = ButtonCreator('round_button_header');
export const BorderButton = ButtonCreator('border_button');
