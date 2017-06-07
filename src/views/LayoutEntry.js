import React from 'react';
import PropTypes from 'prop-types';
import HeaderInitial from '../components/HeaderInitial';
import Footer from '../components/Footer';

const LayoutEntry = ({ children }) => (<div>
  <HeaderInitial />
  <div>
    {children}
  </div>
  <Footer />
</div>);

LayoutEntry.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutEntry;
