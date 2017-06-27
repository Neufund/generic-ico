import React from 'react';
import { Field } from 'redux-form';
import { DatePicker } from 'redux-form-material-ui';
import PropTypes from 'prop-types';

const FieldCalender = ({ name, ...props }) => (
  <Field
    {...props}
    name={name}
    format={null}
    component={DatePicker}
  />
  );
FieldCalender.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FieldCalender;

// TODO: Change material UI
