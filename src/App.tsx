import React, { Component } from "react";
import Spec from "./Spec";

const starterSpec = `
block sam:
  repeat 100:
    data: red, green
    choice
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Spec spec={starterSpec} />
      </div>
    );
  }
}

export default App;
