import React from 'react';
import Dropzone from 'react-dropzone';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';
import styles from './Upload.scss';

const renderDropzone = field => (
  <div>
    <Dropzone
      accept="image/*"
      maxSize="3000"
      className={styles.overide}
      name={field.name}
      onDrop={fileToUpload => field.input.onChange(fileToUpload)}
    >
      <div>
        <p className={styles.header} >
          <i className={`material-icons ${styles.logo}`}>publish</i> &nbsp; &nbsp; Click here to upload a file </p>
        <p className={styles.body} >
         Your file should not be bigger than 3 MB it can be .png .jpg .pdf
        </p>
      </div>
    </Dropzone>
    {field.input.value && (
    <div>
      { <img
        style={styles.preview}
        alt={field.input.name}
        src={field.input.value[0].preview}
      />} </div>)}
  </div>);

const Upload = ({ name, ...props }) => (
  <Field
    {...props}
    name={name}
    component={renderDropzone}
  />
    );
Upload.propTypes = {
  name: PropTypes.string.isRequired,
};
export default Upload;

// TODO: add translation
// TODO: add PDF support with special icon
