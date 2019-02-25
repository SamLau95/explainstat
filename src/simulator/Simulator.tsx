import React, { Component } from "react"
import { connect } from "react-redux"

import { Block, State } from "../types"
import SimBlocks from "./SimBlocks"

interface Props {
  blocks: Block[]
}

const mapStateToProps = (state: State) => ({
  blocks: state.blocks,
})

class Simulator extends Component<Props> {
  render() {
    return (
      <div className="Simulator">
        <SimBlocks blocks={this.props.blocks} path={[]} />
      </div>
    )
  }
}

export default connect(mapStateToProps)(Simulator)
