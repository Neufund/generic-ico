import React from 'react';
import { Field } from 'redux-form';
import DatePicker from 'material-ui/DatePicker';
import PropTypes from 'prop-types';

const RenderCalendar = props =>
  <DatePicker {...props} />;

const Calendar = ({ name, ...props }) => (
  <Field
    {...props}
    name={name}
    format={null}
    component={RenderCalendar}
  />
  );
Calendar.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Calendar;

// TODO: Solve the meta input extra props problem
