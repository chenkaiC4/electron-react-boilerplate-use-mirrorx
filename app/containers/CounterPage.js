// import { bindActionCreators } from 'redux';
import mirror, { connect, actions } from 'mirrorx';
import Counter from '../components/Counter';
// import * as CounterActions from '../actions/counter';

mirror.model({
  name: 'counter',
  initialState: 2,
  reducers: {
    increment(state) {
      return state + 1;
    },
    decrement(state) {
      return state - 1;
    },
    incrementIfOdd(state) {
      if (state % 2 === 0) {
        return state;
      }
      return state + 1;
    }
  },
  effects: {
    incrementAsync() {
      setTimeout(() => {
        actions.counter.increment();
      }, 1000);
    }
  }
});

mirror.hook((action) => {
  console.log(action);
});

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

export default connect(mapStateToProps)(Counter);
