import React, { Component } from "react";
import Signupcomp from './signup';
import RegrestrationComp from './login';


class Register extends Component {
  constructor() {
    super();
    this.state = {
      showLogin: true,
    };
  }

  handleToggleForm = () => {
    this.setState({ showLogin: !this.state.showLogin });
  };

  render() {
    return (
      <div className="App">
        {this.state.showLogin ? (
          <RegrestrationComp onToggleForm={this.handleToggleForm} />
        ) : (
          <Signupcomp />
        )}
      </div>
    );
  }
}

export default Register;
