import React, { Component } from "react";

import PopulationInput from "./PopulationInput";
import PopulationResult from "./PopulationResult";

class PopulationCalculator extends Component {
  state = {};
  render() {
    return (
      <div>
        <PopulationInput />
        <hr />
        <PopulationResult />
      </div>
    );
  }
}

export default PopulationCalculator;
