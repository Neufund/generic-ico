import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { routeTo } from 'redux-router-kit';

const mapDispatchToProps = dispatch => ({
  goToLink: (id) => {
    dispatch(routeTo(id));
  },
});

const LinkView = ({ goToLink, caption, url }) =>
  (<a
    tabIndex="0"
    role="link"
    onClick={(event) => {
      event.preventDefault();
      goToLink(url);
    }}
  >{caption}</a>);

LinkView.propTypes = {
  goToLink: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
};

const Link = connect(
  null,
  mapDispatchToProps
)(LinkView);

const Header = () => (
  <header>
    <div>Header</div>
    <Link url="/login" caption="Login" /> <br />
    <Link url="/startupintro" caption="Startups" /> <br />
    <Link url="/investorintro/1" caption="Investors" />
    <hr />
  </header>);

export default Header;
