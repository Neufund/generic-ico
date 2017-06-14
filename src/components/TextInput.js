import React from 'react';
import { Field } from 'redux-form';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';

function RenderTextField({ ...props }) {
  const textProp = Object.assign({}, props);
  delete textProp.meta;
  delete textProp.input;

  return (
    <TextField
      {...textProp}
    />
  );
}
const TextInput = ({ name, ...props }) => (
  <Field
    {...props}
    name={name}
    id={name}
    component={RenderTextField}
  />
  );
TextInput.propTypes = {
  name: PropTypes.string.isRequired,
};

export default TextInput;
