import "./App.css";
import TitleBar from "./components/TitleBar";
import PopulationCalculator from "./components/PopulationCalculator";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <main role="main" className="container">
        <TitleBar />
        <PopulationCalculator />
      </main>
    </React.Fragment>
  );
}

export default App;
