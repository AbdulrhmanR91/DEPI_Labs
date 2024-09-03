import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      quantity: 1,
    };
  }

  increment = () => {
    this.setState((prevState) => ({
      quantity: prevState.quantity + 1,
    }));
  };

  decrement = () => {
    this.setState((prevState) => ({
      quantity: prevState.quantity > 1 ? prevState.quantity - 1 : 1,
    }));
  };

  render() {
    return (
      <div className="container">
        <button className="decrement" onClick={this.decrement}>-</button>
        <span className="quantity">{this.state.quantity}</span>
        <button className="increment" onClick={this.increment}>+</button>
      </div>
    );
  }
}

export default Counter;
