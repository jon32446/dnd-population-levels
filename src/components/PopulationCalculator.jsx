import React, { Component } from "react";

import PopulationInput from "./PopulationInput";
import PopulationResult from "./PopulationResult";

class PopulationCalculator extends Component {
  state = { population: 1000000, shapeParameter: 1.15 };

  handlePopulationChange = (population) => {
    if (population < 1) {
      population = 1;
    }
    this.setState({ population });
  };

  handleShapeParameterChange = (shapeParameter) => {
    this.setState({ shapeParameter });
  };

  render() {
    const { shapeParameter } = this.state;
    return (
      <div>
        <PopulationInput
          onPopulationChange={this.handlePopulationChange}
          onShapeParameterChange={this.handleShapeParameterChange}
          shapeParameter={shapeParameter}
        />
        <hr />
        <PopulationResult
          population={this.state.population}
          shapeParameter={shapeParameter}
        />
      </div>
    );
  }
}

export default PopulationCalculator;
