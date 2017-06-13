import React from 'react';
import { Field } from 'redux-form';
import { TextField } from 'redux-form-material-ui';
import PropTypes from 'prop-types';


const TextInput = ({ name, placeholder, ...props }) => (
  <Field
    name={name}
    component={TextField}
    {...props}
    placeholder={placeholder}
  />
  );
TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

TextInput.defaultProps = {
  placeholder: '',
};

export default TextInput;
