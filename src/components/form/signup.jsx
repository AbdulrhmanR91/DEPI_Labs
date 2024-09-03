import React, { Component } from "react";

class Signupcomp extends Component {
  constructor() {
    super();
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    };
  }

  handlefirstname = (event) => {
    this.setState({ firstname: event.target.value });
  };

  handlelastname = (event) => {
    this.setState({ lastname: event.target.value });
  };

  handlemail = (event) => {
    this.setState({ email: event.target.value });
  };

  handlePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  handlesignup = (event) => {
    event.preventDefault();
    alert(`Your UserName is ${this.state.firstname}, 
            Your email is ${this.state.email},`);
  };

  render() {
    return (
      <div className="loginContainer">
        <form className="signup" onSubmit={this.handlesignup}>
          <h2>signup</h2>
          <div>
            <input
              type="text"
              value={this.state.firstname}
              onChange={this.handlefirstname}
              placeholder="First name"
              required
            ></input>
            <input
              type="text"
              value={this.state.lastname}
              onChange={this.handlelastname}
              placeholder="last name"
              required
            ></input>
          </div>

          <div>
            <input
              type="text"
              value={this.state.email}
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
            <button type="submit">SignUp</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Signupcomp;
