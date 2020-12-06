import React, { Component } from "react";

class TitleBar extends Component {
  state = {};
  render() {
    return (
      <div className="bg-white py-5 text-center">
        <h2>D&amp;D world population levels</h2>
        <p className="lead">
          The 80/20 principle (power law) applies in many contexts. It is
          reasonable to expect that in the world of D&amp;D, the distribution of
          character levels in the world population should follow a power law
          probability distribution. This utility can tell you how many level 20
          (etc.) characters should inhabit the world (other than your players).
        </p>
      </div>
    );
  }
}

export default TitleBar;
