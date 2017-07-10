import React from 'react';
import PropTypes from 'prop-types';
import { note } from './HelpContainer.scss';

const HelpContainer = ({ className, children, ...props }) =>
  (<div
    className={className !== undefined ? `${note} ${className}` : note}
    {...props}
  >
    {children}
  </div>);

HelpContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

HelpContainer.defaultProps = {
  className: undefined,
};

export default HelpContainer;
