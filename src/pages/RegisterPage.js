import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import HeaderRegistration from '../components/HeaderRegistration';
import Footer from '../components/Footer';

import common from '../styles/common.scss';

export default () =>
  (<div className={common.layoutAppContainer}>
    <HeaderRegistration />
    <div className={`${common.layoutContentArea} ${common.gradientContentArea}`}>
      <div className={common.layoutWidthLimiter}>

        <Grid fluid>
          <Row>
            <Col lgOffset={3} lg={6}>
              <div className={common.whiteArea}>
                content
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
      <Footer />
    </div>
  </div>);
