import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { getTranslator } from '../reducers/translation';

import styles from './HeaderProfileContext.scss';
import common from '../styles/common.scss';

const HeaderProfileContextComponent = ({ i18n }) =>
  (<header className={styles.header}>
    <div className={common.layoutWidthLimiter}>
      <Grid fluid>
        <Row>
          <Col lgOffset={1} lg={10}>
            {i18n('Neufund Platform')}
          </Col>
        </Row>
      </Grid>
    </div>
  </header>);

HeaderProfileContextComponent.propTypes = {
  i18n: PropTypes.func.isRequired,
};

export default connect(
  state => ({ i18n: getTranslator(state) })
)(HeaderProfileContextComponent);
