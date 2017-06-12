import React from 'react';
import { Field, reduxForm, propTypes } from 'redux-form';
import { TextField } from 'redux-form-material-ui';


const SimpleForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <Field
            name="firstName"
            component={TextField}
            type="text"
            placeholder="First Name"
          />
        </div>
      </div>
    </form>
  );
};
SimpleForm.propTypes = {
  ...propTypes,
};
export default reduxForm({
  form: 'simple', // a unique identifier for this form
})(SimpleForm);
