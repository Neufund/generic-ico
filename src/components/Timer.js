import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

import styles from './Timer.scss';

// TODO: this is just placeholder it needs to be implemented correctly
export default () =>
  (<div className={styles.timer}>
    <CircularProgress size={25} />
    <p className={styles.text}>
      You have <span className={styles.countdown}>8 seconds</span> left
    </p>
  </div>);
