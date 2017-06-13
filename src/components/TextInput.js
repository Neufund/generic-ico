import React from 'react';
import { Field, propTypes } from 'redux-form';
import { TextField } from 'redux-form-material-ui';


const TextInput = ({ name, type, placeholder, ...props }) => (
  <Field
    name={name}
    component={TextField}
    type={type}
    {...props}
    placeholder={placeholder}
  />
  );
TextInput.propTypes = {
  ...propTypes,
};

export default TextInput;
