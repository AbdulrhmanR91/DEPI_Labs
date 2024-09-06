import React, { Component } from "react";
import { Consumer } from "../../context/Context";
class ComponentFive extends Component {
  render() {
    return (
      <div>
        <Consumer>
          {(value) => {
            return (
              <div className="Card2">
                <p> Name : {value.name}</p>
                <p> Email : {value.Email}</p>
                <p> Address : {value.Address}</p>
                <p> age : {value.age}</p>
                <p> Gender : {value.Gender}</p>
              </div>
            );
          }}
        </Consumer>
      </div>
    );
  }
}

export default ComponentFive;
