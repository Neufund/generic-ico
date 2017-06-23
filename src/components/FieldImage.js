import React from 'react';
import Dropzone from 'react-dropzone';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';
import styles from './FieldImage.scss';

const oFReader = new FileReader(); // eslint-disable-line no-undef

const DropzoneImage = ({ input }) => (
  <div>
    <Dropzone
      accept={'image/*'}
      maxSize={300000}
      multiple={false}
      className={styles.overide}
      name={input.name}
      onDrop={(fileToUpload) => {
        oFReader.readAsDataURL(fileToUpload[0]);
        oFReader.onloadend = () => input.onChange(oFReader.result);
      }}
    >
      <div>
        <p className={styles.header} >
          <i className={`material-icons ${styles.logo}`}>publish</i> &nbsp; &nbsp; Click here to upload a file </p>
        <p className={styles.body} >
         Your file should not be bigger than 3 MB it can be .png .jpg
        </p>
      </div>
    </Dropzone>
    {input.value && (
      <div>
        { <img
          style={{ maxHeight: '200px' }}
          alt={input.name}
          src={input.value}
        />} </div>)}
  </div>);
DropzoneImage.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.arrayOf(PropTypes.object).isRequired]),
  }).isRequired,
};


const FieldImage = ({ name, ...props }) => (
  <Field
    {...props}
    name={name}
    component={DropzoneImage}
  />
);
FieldImage.propTypes = {
  name: PropTypes.string.isRequired,
};
export default FieldImage;

// TODO: clean code
// TODO: Add translation
