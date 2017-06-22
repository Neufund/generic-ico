import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import HeaderRegistration from '../components/HeaderRegistration';
import Footer from '../components/Footer';

import styles from './RegisterPage.scss';
import common from '../styles/common.scss';

export default () =>
  (<div className={common.appContainer}>
    <HeaderRegistration />
    <div className={common.contentArea}>
      <div className={common.widthLimiter}>
        <Grid fluid>
          <Row>
            <Col lgOffset={3} lg={6}>
              <div className={styles.mainArea}>
                content
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
      <Footer />
    </div>
  </div>);
