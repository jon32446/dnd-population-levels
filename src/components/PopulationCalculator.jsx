import React, { Component } from "react";

import PopulationInput from "./PopulationInput";
import PopulationResult from "./PopulationResult";

class PopulationCalculator extends Component {
  state = { population: 1000000 };

  handlePopulationChange = (population) => {
    if (population < 1) {
      population = 1;
    }
    this.setState({ population });
  };

  render() {
    return (
      <div>
        <PopulationInput onPopulationChange={this.handlePopulationChange} />
        <hr />
        <PopulationResult population={this.state.population} />
      </div>
    );
  }
}

export default PopulationCalculator;
