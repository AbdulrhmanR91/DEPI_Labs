import React, { Component } from "react";
import Informations from "./informationsSignUp";

class Signupcomp extends Component {
  constructor() {
    super();
    this.myRef= React.createRef();
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      submit: false,
      signupTime: "",
      
    };
  }

  componentDidMount(){
    //console.log(this.myRef.current);
    this.myRef.current.focus();
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
    const currentTime = new Date().toLocaleString();
    this.setState({ submit: true, signupTime: currentTime });
  };

  render() {
    if (this.state.submit) {
      return (
        <Informations 
          firstname={this.state.firstname} 
          lastname={this.state.lastname} 
          email={this.state.email}
          signupTime={this.state.signupTime}
        />
      );
    }

    

    return (
      <div className="loginContainer">
        <form className="signup" onSubmit={this.handlesignup}>
          <h2>Signup</h2>
          <div>
            <input
              type="text"
              value={this.state.firstname}
              onChange={this.handlefirstname}
              placeholder="First name"
              ref={this.myRef}
              required
            />
            <input
              type="text"
              value={this.state.lastname}
              onChange={this.handlelastname}
              placeholder="Last name"
              required
            />
          </div>

          <div>
            <input
              type="email"
              value={this.state.email}
              onChange={this.handlemail}
              placeholder="Email"
              required
            />
          </div>

          <div>
            <input
              type="password"
              value={this.state.password}
              onChange={this.handlePassword}
              placeholder="Password"
              required
            />
          </div>

          <div className="buttonform">
            <button type="submit">Sign Up</button>
            <button type="button" onClick={this.props.onToggleForm}>Sign In</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Signupcomp;