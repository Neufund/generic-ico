import React from 'react';
import PropTypes from 'prop-types';
import styles from './Buttons.scss';

const buttonCreator = (style) => {
  const Button = ({ onClick, children, tabIndex, type }) => (
    <button
      className={style}
      tabIndex={tabIndex}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>);

  Button.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
    tabIndex: PropTypes.number,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
  };

  Button.defaultProps = {
    tabIndex: 0,
    type: 'button',
    onClick: () => {},
  };
  return Button;
};

export const SquareButton = buttonCreator(styles.squareButton);
export const RoundButton = buttonCreator(styles.roundButton);
export const RoundHeaderButton = buttonCreator(styles.roundHeaderButton);
export const BorderButton = buttonCreator(styles.borderButton);
export const BorderHeaderButton = buttonCreator(styles.borderHeaderButton);
