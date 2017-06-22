import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';
import IconButton from 'material-ui/IconButton';
import LinearProgress from 'material-ui/LinearProgress';

import styles from './ProcessIndicator.scss';
import common from '../styles/common.scss';

// TODO: this component should be reviewed with Ola for approval.
// For now its more of placeholder to continue most urgent work

const ProcessIndicatorComponent = ({ stepsTotal, stepNumber, stepName }) =>
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
            <span className={styles.stepDescription}>{stepName}</span>
          </Col>
        </Row>
      </Grid>
    </div>
    {stepNumber && stepsTotal &&
      <LinearProgress mode="determinate" value={(stepNumber / stepsTotal) * 100} />
    }
  </div>);

ProcessIndicatorComponent.propTypes = {
  stepsTotal: PropTypes.number,
  stepNumber: PropTypes.number,
  stepName: PropTypes.string.isRequired,
};

ProcessIndicatorComponent.defaultProps = {
  stepsTotal: undefined,
  stepNumber: undefined,
};

export default ProcessIndicatorComponent;
