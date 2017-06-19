import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';
import IconButton from 'material-ui/IconButton';
import LinearProgress from 'material-ui/LinearProgress';

import styles from './ProcessIndicator.scss';
import common from '../styles/common.scss';

const ProcessIndicatorComponent = ({ stepsTotal, stepNumber, processName, stepName }) =>
  (<div className={styles.processIndicator}>
    <div className={common.layoutWidthLimiter}>
      <Grid fluid>
        <Row>
          <Col lg={1} className={`${styles.column} ${styles.back}`}>
            {/* TODO: consult with designer exact sizes and positions of back arrow*/}
            <IconButton
              iconClassName="material-icons"
              iconStyle={{ color: '#E8EFE0' }}
              style={{ paddingBottom: '1px' }}
            >keyboard_backspace</IconButton>
            <span className={styles.caption}>back</span>
          </Col>
          <Col lg={11} className={`${styles.column} ${styles.text}`}>
            {stepNumber && stepsTotal &&
              <span className={styles.stepNumber}>(step {stepNumber} of {stepsTotal})</span>
            }
            <span className={styles.stepDescription}> {processName} {stepName}</span>
          </Col>
        </Row>
      </Grid>
    </div>
    <LinearProgress mode="determinate" value={(stepNumber / stepsTotal) * 100} />
  </div>);

ProcessIndicatorComponent.propTypes = {
  stepsTotal: PropTypes.number,
  stepNumber: PropTypes.number,
  processName: PropTypes.string,
  stepName: PropTypes.string,
};

ProcessIndicatorComponent.defaultProps = {
  stepsTotal: undefined,
  stepNumber: undefined,
  processName: undefined,
  stepName: undefined,
};

export default ProcessIndicatorComponent;
