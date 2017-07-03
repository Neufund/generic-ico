import React from 'react';
import PropTypes from 'prop-types';
import { note } from './NoteWhiteArea.scss';

const NoteWhiteArea = ({ className, children, ...props }) =>
  (<div
    className={className !== undefined ? `${note} ${className}` : note}
    {...props}
  >
    {children}
  </div>);

NoteWhiteArea.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

NoteWhiteArea.defaultProps = {
  className: undefined,
};

export default NoteWhiteArea;
