import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { getTranslator } from '../reducers/translation';
import { RegisterLink } from '../components/PredefinedLinks';
import styles from './HeaderInitial.scss';

const HeaderInitial = ({ i18n }) => (
  <header>
    <Grid fluid>
      <Row className={styles.header}>
        <Col lg={1} className={styles.logo_container}>
          <div className={styles.logo} />
        </Col>
        <Col lg={8} className={styles.main_area}>
          <div className={styles.title}>
            { i18n('Neufund Platform') }
          </div>
          <div className={styles.status}>
            { i18n('Log in') }
          </div>
        </Col>
        <Col lg={3}>
          <RegisterLink className={styles.register}>
            { i18n('Create an account') }
          </RegisterLink>
        </Col>
      </Row>
    </Grid>
  </header>);

HeaderInitial.propTypes = {
  i18n: PropTypes.func.isRequired,
};

export default connect(state => ({
  i18n: getTranslator(state),
}))(HeaderInitial);
