import React from 'react';
import PropTypes from 'prop-types';
import Link from '../components/Link';

// TODO: Is it possible to rewrite this without usage of return but keeping propTypes check?
const LinkCreator = (path) => {
  const func = ({ children, ...props }) => <Link {...props} path={path}>{children}</Link>;
  func.propTypes = {
    children: PropTypes.node.isRequired,
  };
  return func;
};

export const RegisterLink = LinkCreator('/register');
export const LoginLink = LinkCreator('/login');
export const LoginNanoLink = LinkCreator('/login/nano');
export const KYCLink = LinkCreator('/kyc');
