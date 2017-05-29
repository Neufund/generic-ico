import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';

const Layout = ({ children }) => (<div>
  <Header />
  <div>
    {children}
  </div>
</div>);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
