import React from 'react';
import PropTypes from 'prop-types';
import QRCode from 'qrcode.react';

const QrComponent = ({ value, ...props }) => (
  <QRCode
    {...props}
    value={value}
  />);

QrComponent.propTypes = {
  value: PropTypes.string.isRequired,
};

export default QrComponent;
