import React, { Component } from "react";
import "./App.css";
import TestTable from "./components/testTable";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TestTable title="a test table" data={[2, 4, 1, 6, 5]} />
      </div>
    );
  }
}

export default App;
