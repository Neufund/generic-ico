import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import IconButton from 'material-ui/IconButton';

import { header, content, user, iconStyle } from './HeaderRegisterWelcome.scss';
import { layoutWidthLimiter } from '../styles/common.scss';

// TODO: This component need to be finished for now its just placeholder to show on one of pages
export default () =>
  (<header>
    <div className={layoutWidthLimiter}>
      <div className={header}>
        <Grid fluid>
          <Row>
            <Col lgOffset={1} lg={11} className={content}>
              <IconButton iconClassName={`material-icons ${iconStyle}`} >
                person
              </IconButton>
              <div className={user}>Marcin Rudolf</div>
            </Col>
          </Row>
        </Grid>
      </div>
    </div>
  </header>);
