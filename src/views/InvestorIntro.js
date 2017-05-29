import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { routeTo } from 'redux-router-kit';


const Investor1 = ({ goToLink }) =>
  (<div>
    <div>Investor Intro 1</div>
    <a
      tabIndex="0"
      role="link"
      onClick={(event) => {
        event.preventDefault();
        goToLink('/investorintro/2/');
      }}
    >go to investors intro part two</a>
  </div>);

Investor1.propTypes = {
  goToLink: PropTypes.func.isRequired,
};

const Investor2 = ({ goToLink }) =>
  (<div>
    <div>Investor Intro 1</div>
    <a
      tabIndex="0"
      role="link"
      onClick={(event) => {
        event.preventDefault();
        goToLink('/login/');
      }}
    >go to login</a>
  </div>);

Investor2.propTypes = {
  goToLink: PropTypes.func.isRequired,
};


const Investor = ({ step, goToLink }) => step === '1' ? <Investor1 goToLink={goToLink} /> : <Investor2 goToLink={goToLink} />;

Investor.defaultProps = {
  step: 1,
};

Investor.propTypes = {
  step: PropTypes.number,
  goToLink: PropTypes.func.isRequired,
};


export default connect(
  state => ({
    step: state.router.current.params.step,
  }),
  dispatch => ({
    goToLink: (id) => {
      dispatch(routeTo(id));
    },
  })
)(Investor);
