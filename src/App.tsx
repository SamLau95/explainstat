import React, { Component } from "react"

import Spec from "./Spec"
import { Simulator } from "./simulator"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Spec />
        <Simulator />
      </div>
    )
  }
}

export default App
