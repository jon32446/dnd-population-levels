import React, { Component } from "react";
import PopulationInput from "./PopulationInput";
import PopulationResult from "./PopulationResult";
import _ from "lodash";

class PopulationCalculator extends Component {
  state = { population: 1000000, shapeParameter: 1.15, popLevels: _.range(21) };

  handlePopulationChange = (population) => {
    if (population < 1) {
      population = 1;
    }
    this.setState({ population });
  };

  handleShapeParameterChange = (shapeParameter) => {
    this.setState({ shapeParameter });
  };
  getPopAtLevel = (totalPop, level) => {
    const a = parseFloat(this.state.shapeParameter);
    const m = 1;
    const x = level + 1;
    let fx = (a * m ** a) / x ** (a + 1) / a;
    return Math.round(totalPop * fx);
  };

  render() {
    const { shapeParameter, popLevels } = this.state;
    return (
      <div>
        <PopulationInput
          onPopulationChange={this.handlePopulationChange}
          onShapeParameterChange={this.handleShapeParameterChange}
          shapeParameter={shapeParameter}
          popLevels={popLevels}
          getPopAtLevel={this.getPopAtLevel}
          population={this.state.population}
        />
        <hr />
        <PopulationResult
          population={this.state.population}
          shapeParameter={shapeParameter}
          popLevels={popLevels}
          getPopAtLevel={this.getPopAtLevel}
        />
      </div>
    );
  }
}

export default PopulationCalculator;
