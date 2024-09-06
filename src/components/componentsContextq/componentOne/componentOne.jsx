import React, { Component, Fragment } from "react";
import ComponentThree from "../componentThree/ComponentThree";
import ComponentFive from "../ComponentFive/ComponentFive";
class ComponentOne extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <ComponentThree></ComponentThree>
        </div>
        <div>
          <ComponentFive></ComponentFive>
        </div>
      </Fragment>
    );
  }
}

export default ComponentOne;
