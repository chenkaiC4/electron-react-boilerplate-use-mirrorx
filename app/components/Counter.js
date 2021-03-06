// @flow
import React, { Component } from 'react';
import { Link, actions } from 'mirrorx';
import styles from './Counter.css';

class Counter extends Component {
  props: {
    counter: number
  };

  render() {
    const { counter } = this.props;
    console.log(this.props);
    const { increment, incrementIfOdd, incrementAsync, decrement } = actions.counter;
    console.log(actions);
    return (
      <div>
        <div className={styles.backButton} data-tid="backButton">
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <div className={`counter ${styles.counter}`} data-tid="counter">
          {counter}
        </div>
        <div className={styles.btnGroup}>
          <button className={styles.btn} onClick={() => increment()} data-tclass="btn">
            <i className="fa fa-plus" />
          </button>
          <button className={styles.btn} onClick={() => decrement()} data-tclass="btn">
            <i className="fa fa-minus" />
          </button>
          <button className={styles.btn} onClick={() => incrementIfOdd()} data-tclass="btn">odd</button>
          <button className={styles.btn} onClick={() => incrementAsync()} data-tclass="btn">async</button>
        </div>
      </div>
    );
  }
}

export default Counter;
