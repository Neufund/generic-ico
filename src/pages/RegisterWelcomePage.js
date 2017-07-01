import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import HeaderRegisterWelcome from '../components/HeaderRegisterWelcome';
import Footer from '../components/Footer';

import styles from './RegisterWelcomePage.scss';
import common from '../styles/common.scss';

export default () =>
  (<div className={`${common.layoutAppContainer} ${styles.background}`} >
    <HeaderRegisterWelcome />
    <div className={`${common.layoutContentArea} ${styles.contentArea}`}>
      <div className={common.layoutWidthLimiter}>
        <Grid fluid>
          <Row>
            <Col lgOffset={3} lg={6}>
              <div className={`${common.whiteArea} ${styles.content}`}>
                content
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
      <Footer />
    </div>
  </div>);
