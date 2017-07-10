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

const required = value => (value ? undefined : 'Required');

const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined;

const numeric = value =>
  value && /[^0-9 ]/i.test(value)
    ? 'Only numeric characters'
    : undefined;

const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;

const RenderFieldText = props =>
  <TextField {...mapError(props)} />;

const FieldText = ({ name, ...props }) => (
  <Field
    {...props}
    name={name}
    component={RenderFieldText}
  />
  );
FieldText.propTypes = {
  name: PropTypes.string.isRequired,
};

export const FieldEmail = ({ ...props }) =>
    (<FieldText {...props} validate={[required, email]} />);
export const FieldPassword = ({ ...props }) =>
    (<FieldText {...props} type={'password'} validate={[required]} />);
export const FieldCodeVerification = ({ ...props }) =>
    (<FieldText {...props} validate={[required, numeric, minLength(6)]} />);
export const FieldRecoveryCode = ({ ...props }) =>
    (<FieldText {...props} validate={[required, numeric]} />);
export default FieldText;

// TODO: Add validations for all costume fields
