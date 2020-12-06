import React, { Component } from "react";
import Plot from "react-plotly.js";

class PopulationInput extends Component {
  render() {
    const {
      popLevels,
      getPopAtLevel,
      population,
      shapeParameter,
      onPopulationChange,
      onShapeParameterChange,
    } = this.props;

    return (
      <div className="py-2">
        <form>
          <div className="form-group row">
            <div className="col-lg-2 col-md-3">
              <label htmlFor="population" className="col-form-label">
                Population
              </label>
            </div>
            <div className="col-lg-4 col-md-6">
              <input
                type="number"
                className="form-control"
                id="population"
                onChange={(evt) => onPopulationChange(evt.target.value)}
                value={population}
                step={500}
              />
            </div>
            <div className="form-group form-check col-lg-6 col-md-3">
              <div className="ml-3">
                <input
                  type="checkbox"
                  className="form-check-input my-2"
                  id="commonerBreakdown"
                  disabled
                />
                <label className="form-check-label" htmlFor="commonerBreakdown">
                  Break down commoners into trades and professions{" "}
                  <a
                    href="https://donjon.bin.sh/fantasy/demographics/"
                    target="_blank"
                    title="Vaporware, just use this generator so long :)"
                  >
                    <sup>&#x1F517;</sup>
                  </a>
                </label>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="powerCurveFactor">
              Shape Parameter (adjust power curve)
              <sup>
                <a
                  data-toggle="collapse"
                  href="#shapeParameterInfo"
                  role="button"
                  aria-expanded="false"
                  aria-controls="shapeParameterInfo"
                >
                  ?
                </a>
              </sup>
              <span className="badge badge-light">
                &nbsp;= {shapeParameter}
              </span>
            </label>
            <input
              type="range"
              className="form-control-range"
              id="powerCurveFactor"
              min="0.1"
              max="10"
              value={shapeParameter}
              step="0.05"
              onChange={(evt) => onShapeParameterChange(evt.target.value)}
            />
            <p></p>
          </div>
        </form>
        <div className="collapse mb-4" id="shapeParameterInfo">
          <div className="card card-body">
            <p>
              The shape parameter (&alpha;) adjusts how quickly the power curve
              falls off. A higher value will mean that the higher levels are
              much more rare.
            </p>
            <p>
              The Pareto principle (80-20 rule) applies to many real-world
              distributions. For example, 80% of the people live in 20% of the
              settlements; or, 80% of the oil is found in 20% of the oil fields.
              The 80-20 rule corresponds to a shape parameter of
              &alpha;&nbsp;&asymp;&nbsp;1.161.
            </p>
            <p>
              If your fantasy world has experience points distributed among the
              population in a similar way to how wealth or resources are
              distributed in the real world, then set the scale parameter to
              1.15 or 1.20.
            </p>
            <p>
              If high level characters are much more rare in your fantasy world,
              then set the scale parameter to a higher value.
            </p>
            <p>
              The <i>Population</i> input can also be set to a the population of
              a town, city or province to determine how many high level
              characters to expect in that region.
            </p>
            <p>
              The XP requirement for each character level in 5th Edition follows
              an exponential curve that is approximately defined by the{" "}
              <a href="https://www.desmos.com/calculator/ntxr8zoaq0">
                following function
              </a>
              :
              <br />
              <i>
                346.793 &times; lvl
                <sup>2.34618</sup>
              </i>{" "}
              (with R&sup2; = 0.9988)
            </p>
          </div>
        </div>

        <div className="mx-auto" style={{ width: 500, display: "block" }}>
          <Plot
            data={[
              {
                x: popLevels,
                y: popLevels.map((p) => getPopAtLevel(population, p)),
                type: "scatter",
                mode: "lines+markers",
                marker: { color: "blue" },
              },
            ]}
            layout={{
              width: 500,
              height: 350,
              margin: { t: 10, l: 50, b: 50, r: 50 },
            }}
          />
        </div>
      </div>
    );
  }
}

export default PopulationInput;
