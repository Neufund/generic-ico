import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { routeTo } from 'redux-router-kit';

const Link = ({ clickHanlder, caption }) =>
  (<a tabIndex="0" role="link" onClick={clickHanlder}>{caption}</a>);

Link.propTypes = {
  clickHanlder: PropTypes.func.isRequired,
  caption: PropTypes.string.isRequired,
};

const Header = ({ goToLink }) => {
  const handleLinkClick = url => (event) => {
    event.preventDefault();
    goToLink(url);
  };

  return (
    <header>
      <div>Header</div>
      <Link clickHanlder={handleLinkClick('/login')} caption="Login" /> <br />
      <Link clickHanlder={handleLinkClick('/startupintro')} caption="Startups" /> <br />
      <Link clickHanlder={handleLinkClick('/investorintro/1')} caption="Investors" />
      <hr />
    </header>);
};


Header.propTypes = {
  goToLink: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  goToLink: (id) => {
    dispatch(routeTo(id));
  },
});

export default connect(
  null,
  mapDispatchToProps
)(Header);
