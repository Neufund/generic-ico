import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import HeaderType2 from '../components/Header_type_2';
import Footer from '../components/Footer';


import styles from './RegisterPage.scss';
import common from '../styles/common.scss';

export default () =>
  (<div className={common.appContainer}>
    <HeaderType2 />
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
