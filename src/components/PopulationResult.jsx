import React, { Component } from "react";

class PopulationResult extends Component {
  getPopulationLevels = () => {
    const pop = this.props.population || 1000000;

    const format = new Intl.NumberFormat("en-GB").format;

    return this.props.popLevels.map((lvl) => (
      <React.Fragment key={lvl}>
        <div className="row mb-3 m-1" key={"row" + { lvl }}>
          <div className="col-md-3" key={"level" + { lvl }}>
            Level {lvl}
          </div>
          <div className="col-md-2 text-right" key={"pop" + { lvl }}>
            {format(this.props.getPopAtLevel(pop, lvl))}
          </div>
        </div>
      </React.Fragment>
    ));
  };

  render() {
    return (
      <div className="min-vh-100 bg-light p-2">
        <h4>Population table</h4>
        {this.getPopulationLevels()}
      </div>
    );
  }
}

export default PopulationResult;
