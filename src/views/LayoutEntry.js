import React from 'react';
import PropTypes from 'prop-types';
import HeaderInitial from '../components/HeaderInitial';
import Footer from '../components/Footer';

const Layout = ({ children }) => (<div>
  <HeaderInitial />
  <div>
    {children}
  </div>
  <Footer />
</div>);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
