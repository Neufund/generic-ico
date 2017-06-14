import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import PropTypes from 'prop-types';

const Recaptcha = ({ sitekey, verifyCallback, expiredCallback, ...props }) =>
  (<ReCAPTCHA
    sitekey={sitekey}
    onChange={verifyCallback}
    onExpired={expiredCallback}
    {...props}
  />);

Recaptcha.propTypes = {
  sitekey: PropTypes.string.isRequired,
  verifyCallback: PropTypes.func.isRequired,
  expiredCallback: PropTypes.func.isRequired,
};

export default Recaptcha;
