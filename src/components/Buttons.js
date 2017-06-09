import React from 'react';
import PropTypes from 'prop-types';
import styles from '../components/Buttons.scss';

const buttonCreator = (type) => {
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
  };

  Button.defaultProps = {
    tabIndex: '0',
  };
  return Button;
};

export const SquareButton = buttonCreator(styles.squareButton);
export const RoundBlueButton = buttonCreator(styles.roundBlueButton);
export const RoundHeaderButton = buttonCreator(styles.roundHeaderButton);
export const BlueBorderButton = buttonCreator(styles.blueBorderButton);
