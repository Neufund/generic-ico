import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CircularProgress from 'material-ui/CircularProgress';
import { getTranslator } from '../reducers/translation';
import styles from './Timer.scss';

// TODO: this is just placeholder it needs to be implemented correctly
const TimerComponent = ({ i18n, secondsLeft }) =>
  (secondsLeft >= 0 ?
    <div className={styles.timer}>
      <CircularProgress size={25} />
      <p className={styles.text}>
        {i18n('You have')} <span className={styles.countdown}>{secondsLeft} {i18n('seconds')}</span> {i18n('left.')}
      </p>
    </div>
      :
    <p>{i18n('Time is up you should start from scratch.')}</p>
  );

TimerComponent.propTypes = {
  i18n: PropTypes.func.isRequired,
  secondsLeft: PropTypes.number.isRequired,
};

const TimerComponentTranslated = connect(
  state => ({ i18n: getTranslator(state) })
  )(TimerComponent);

// eslint-disable-next-line react/prefer-stateless-function
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: props.seconds,
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => {
        if (this.state.seconds <= 0) {
          clearInterval(this.timerID);
        }
        this.setState({
          seconds: this.state.seconds - 1,
        });
      },
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return <TimerComponentTranslated secondsLeft={this.state.seconds} />;
  }
}

Timer.propTypes = {
  seconds: PropTypes.number.isRequired,
};

export default connect(
  // seconds should be taken from configuration - I guess it would be stored somewhere in state
  // eslint-disable-next-line no-unused-vars
  state => ({ seconds: 20 })
)(Timer);
