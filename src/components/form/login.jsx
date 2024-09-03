import React, { Component } from "react";

class RegrestrationComp extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  handlemail = (event) => {
    this.setState({ email: event.target.value });
  };

  handlePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  render() {
    return (
      <div className="loginContainer">
        <form className="Login">
          <h2>Login</h2>

          <div>
            <input
              type="text"
              value={this.state.userName}
              onChange={this.handlemail}
              placeholder="Email"
              required
            ></input>
          </div>

          <div>
            <input
              type="password"
              value={this.state.password}
              onChange={this.handlePassword}
              placeholder="password"
              required
            ></input>
          </div>

          <div className="buttonform">
            <button type="submit">signin</button>
            <button type="button" onClick={this.props.onToggleForm}>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default RegrestrationComp;
