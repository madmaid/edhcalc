import React from 'react';
import { observable } from 'mobx'
import { observer, PropTypes } from 'mobx-react';
import Counter from './Counter'

@observer
class FlexibleCounter extends React.Component {
  @observable edited = this.props.counter.name

  render() {
    return (
      <div className="flex-counter">
        <input
          className="counter-name"
          value={this.edited}
          onChange={this.onChange}
        />
        <Counter counter={this.props.counter} />
      </div>
    )
  }

  onChange = (event) => {
      this.edited = event.target.value;
      this.props.counter.name = this.edited;
  }
};

Counter.propTypes = {
  counter: PropTypes.observableObject.isRequired
};

export default FlexibleCounter;
