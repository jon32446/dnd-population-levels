import React, { Component } from "react";
import _ from "lodash";

class PopulationResult extends Component {
  state = {
    popLevels: _.range(21),
  };

  getPopAtLevel = (totalPop, level) => {
    const a = parseFloat(this.props.shapeParameter);
    const m = 1;
    const x = level + 1;
    let fx = (a * m ** a) / x ** (a + 1) / a;
    return Math.round(totalPop * fx);
  };

  getPopulationLevels = () => {
    const pop = this.props.population || 1000000;

    const format = new Intl.NumberFormat("en-GB").format;

    return this.state.popLevels.map((lvl) => (
      <React.Fragment key={lvl}>
        <div className="row mb-3 m-1" key={"row" + { lvl }}>
          <div className="col-md-3" key={"level" + { lvl }}>
            Level {lvl}
          </div>
          <div className="col-md-2 text-right" key={"pop" + { lvl }}>
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
