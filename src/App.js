import React, { Component } from "react";
import "./App.css";
import BoostTable from "./components/boostTable";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BoostTable title="a boost table" data={[2, 4, 1, 6, 5]} />
      </div>
    );
  }
}

export default App;
