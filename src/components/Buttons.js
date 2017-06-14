import React from 'react';
import PropTypes from 'prop-types';
import styles from './Buttons.scss';

const buttonCreator = (type) => {
  const Button = ({ onClick, children, tabIndex, ...props }) => (
    <button
      className={type}
      tabIndex={tabIndex}
      {...props}
      onClick={onClick}
    >
      {children}
    </button>);

  Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    tabIndex: PropTypes.number.isRequired,
  };

  Button.defaultProps = {
    tabIndex: 0,
  };
  return Button;
};

export const SquareButton = buttonCreator(styles.squareButton);
export const RoundButton = buttonCreator(styles.roundButton);
export const RoundHeaderButton = buttonCreator(styles.roundHeaderButton);
export const BorderButton = buttonCreator(styles.borderButton);
