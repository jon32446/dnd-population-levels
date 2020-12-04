import React, { Component } from "react";
import pareto from "../pareto.png";

class PopulationInput extends Component {
  state = {};
  render() {
    return (
      <div className="py-2">
        <form>
          <div className="form-group row">
            <div class="col-lg-2 col-md-3">
              <label for="worldPop" class="col-form-label">
                World population
              </label>
            </div>
            <div class="col-lg-4 col-md-6">
              <input type="email" class="form-control" id="worldPop" />
            </div>
            <div class="form-group form-check col-lg-6 col-md-3">
              <div className="ml-3">
                <input
                  type="checkbox"
                  class="form-check-input my-2"
                  id="commonerBreakdown"
                />
                <label class="form-check-label" for="commonerBreakdown">
                  Break down commoners into trades and professions
                </label>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label for="powerCurveFactor">Power curve factor</label>
            <input
              type="range"
              class="form-control-range"
              id="powerCurveFactor"
            />
          </div>
        </form>
        <img
          src={pareto}
          className="mx-auto"
          style={{ width: 300, display: "block" }}
        />
      </div>
    );
  }
}

export default PopulationInput;
