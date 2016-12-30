import React from 'react';
import { observer, PropTypes } from 'mobx-react';

@observer
class Counter extends React.Component {

  render() {
    return (
      <div className="counter">
        <div className="counter-value">
          {this.props.counter.value}
        </div>
        <div className="button-list">
          <button className="btn-decrease" type="button" onClick={() => this.onDecrease(5)}>-5</button>
          <button className="btn-decrease" type="button" onClick={() => this.onDecrease()}>-1</button>
          <button className="btn-increase "type="button" onClick={() => this.onIncrease()}>+1</button>
          <button className="btn-increase" type="button" onClick={() => this.onIncrease(5)}>+5</button>
        </div>
      </div>
    )
  }
  onIncrease = (value=1) => {
    if (typeof this.props.increase === "function") {
      this.props.increase(value);
    } else {
      this.props.counter.increase(value);
    }
  }
  onDecrease = (value=1) => {
    if (typeof this.props.decrease === "function") {
      this.props.decrease(value);
    } else {
      this.props.counter.decrease(value);
    }
  }
};

Counter.propTypes = {
  counter: PropTypes.observableObject.isRequired,
  increase: React.PropTypes.func,
  decrease: React.PropTypes.func,
}

export default Counter;
