import React from 'react';
import { Field } from 'redux-form';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';

const mapError = ({
    meta: { touched, error, warning } = {},
    input,
    ...props
  }) =>
  (touched && (error || warning)
    ? {
      ...props,
      ...input,
      errorText: error || warning,
    }
    : { ...input, ...props });

const RenderTextField = props =>
  <TextField {...mapError(props)} />;

const FieldInput = ({ name, ...props }) => (
  <Field
    {...props}
    name={name}
    component={RenderTextField}
  />
  );
FieldInput.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FieldInput;
