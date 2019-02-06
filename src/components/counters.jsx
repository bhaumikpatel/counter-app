import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
      const { onRest, counters, onDelete, onIncrement } = this.props;
    return (
      <div>
        <button
          onClick={onRest}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;