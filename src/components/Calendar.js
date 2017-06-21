import React from 'react';
import { Field } from 'redux-form';
import { DatePicker } from 'redux-form-material-ui';
import PropTypes from 'prop-types';

const Calendar = ({ name, ...props }) => (
  <Field
    {...props}
    name={name}
    format={null}
    component={DatePicker}
  />
  );
Calendar.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Calendar;

// TODO: Lose material-ui
