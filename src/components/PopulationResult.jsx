import React, { Component } from "react";
import _ from "lodash";

class PopulationResult extends Component {
  state = {
    popLevels: _.range(21),
  };

  getPopAtLevel = (totalPop, level) => {
    const a = 1.3;
    const m = 1;
    const x = level + 1;
    let fx = (a * m ** a) / x ** (a + 1) / a;
    return Math.round(totalPop * fx);
  };

  getPopulationLevels = () => {
    const pop = this.props.population || 1000000;

    const format = new Intl.NumberFormat("en-GB").format;

    return this.state.popLevels.map((lvl) => (
      <React.Fragment>
        <div className="row mb-3 m-1">
          <div className="col-md-3">Level {lvl}</div>
          <div className="col-md-2 text-right">
            {format(this.getPopAtLevel(pop, lvl))}
          </div>
        </div>
      </React.Fragment>
    ));
  };

  render() {
    return (
      <div className="min-vh-100 bg-light p-2">
        <h4>Population results</h4>
        {this.getPopulationLevels()}
      </div>
    );
  }
}

export default PopulationResult;
