import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import IconButton from 'material-ui/IconButton';

import styles from './HeaderRegisterWelcome.scss';
import common from '../styles/common.scss';

// TODO: This component need to be finished for now its just placeholder to show on one of pages
export default () =>
  (<header>
    <div className={common.layoutWidthLimiter}>
      <div className={styles.header}>
        <Grid fluid>
          <Row>
            <Col lgOffset={1} lg={11} className={styles.content}>
              <IconButton iconClassName="material-icons" iconStyle={{ color: '#fff' }}>
                person
              </IconButton>
              <div className={styles.user}>Marcin Rudolf</div>
            </Col>
          </Row>
        </Grid>
      </div>
    </div>
  </header>);
