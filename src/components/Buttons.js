import React from 'react';
import Dropzone from 'react-dropzone';
import PropTypes from 'prop-types';
import styles from './Link.scss';

<<<<<<< HEAD
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
=======
const Upload = ({ onDrop, children, ...props }) =>
  (<Dropzone
    className={styles.link}
    // What do we accept as valid?
    accept="image/jpeg, image/png"
    {...props}
    onDrop={onDrop}
  >
    <div>{children}</div>
  </Dropzone>);

Upload.propTypes = {
  onDrop: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Upload;
>>>>>>> Basic Upload
