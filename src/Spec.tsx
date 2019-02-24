import React, { Component } from "react"
import { connect } from "react-redux"

import { State } from "./types"

interface SpecProps {
  spec: string
}

const mapStateToProps = (state: State) => ({ spec: state.spec })

class Spec extends Component<SpecProps> {
  render() {
    return (
      <pre className="Spec">
        <code>{this.props.spec}</code>
      </pre>
    )
  }
}

export default connect(mapStateToProps)(Spec)
