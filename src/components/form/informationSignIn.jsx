import React, { Component } from "react";
import './Informations.css';
class InformationsSignIn extends Component {
  render() {
    const {email,signinTime } = this.props;
    return (
      <div className="infoContainer">
        <h2>User Information</h2>
        <div className="details">
        <p>Email: {email}</p>
        <p>signinTime:{signinTime}</p>
      </div>
      </div>
    );
  }
}

export default InformationsSignIn;