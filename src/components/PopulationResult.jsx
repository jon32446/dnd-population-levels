import React, { Component } from "react";

class PopulationResult extends Component {
  state = {
    popLevels: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
    ],
  };

  getPopulationLevels = () => {
    return this.state.popLevels.map((lvl) => (
      <React.Fragment>
        <div className="row mb-3 m-1">
          <div className="col-md-4">level {lvl}</div>
          <div className="col-md-4">4000</div>
        </div>
      </React.Fragment>
    ));
  };

  render() {
    return (
      <div className="min-vh-100 bg-light p-2">
        <h3>Population results</h3>
        {this.getPopulationLevels()}
      </div>
    );
  }
}

export default PopulationResult;
