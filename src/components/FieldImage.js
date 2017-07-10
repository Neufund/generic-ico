/* global FileReader */
import React from 'react';
import Dropzone from 'react-dropzone';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTranslator } from '../reducers/translation';
import styles from './FieldImage.scss';

const maxFilesize = 3000000;

const DropzoneImage = ({ i18n, input }) => (
  <div>
    <Dropzone
      accept={'image/*,application/pdf'}
      maxSize={maxFilesize}
      multiple={false}
      className={styles.overide}
      name={input.name}
      onDropAccepted={(imageData) => {
        const fileInstance = new FileReader();
        fileInstance.readAsDataURL(imageData[0]);
        fileInstance.onloadend = () => input.onChange(fileInstance.result);
      }}
    >
      <div>
        <div className={styles.header}>
          <div className={`material-icons ${styles.logo}`}>{i18n('publish')}</div>{i18n('Click here to upload a file')}
        </div>
        <p className={styles.body}>{i18n('Your file should not be bigger than 3 MB it can be .png .jpg')}</p>
      </div>
    </Dropzone>
    {input.value.includes('image') && <img alt={input.name} src={input.value} style={{ maxHeight: '200px' }} />}
    {input.value.includes('pdf') && <div className="material-icons" style={{ fontSize: '70px' }} > picture_as_pdf </div>}
  </div>);

DropzoneImage.propTypes = {
  i18n: PropTypes.func.isRequired,
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
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

export default connect(state => ({
  i18n: getTranslator(state) }))(FieldImage);
