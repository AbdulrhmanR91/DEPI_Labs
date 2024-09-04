import React, { Component } from "react";
import './Informations.css';
class Informations extends Component {
  render() {
    const { firstname, lastname, email,signupTime ,signinTime } = this.props;
    return (
      <div className="infoContainer">
        <h2>User Information</h2>
        <div className="details">
        <p>First Name: {firstname}</p>
        <p>Last Name: {lastname}</p>
        <p>Email: {email}</p>
        <p>signupTime:{signupTime}</p>
        <p>signinTime:{signinTime}</p>
      </div>
      </div>
    );
  }
}

export default Informations;