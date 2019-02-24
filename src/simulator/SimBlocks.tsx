import React, { Component } from "react"
import { Block } from "../types"

import SimBlock from "./SimBlock"

interface Props {
  blocks: Block[]
}

class SimBlocks extends Component<Props> {
  render() {
    return (
      <div className="SimBlocks">
        {this.props.blocks.map((block, i) => (
          <SimBlock key={i} block={block} />
        ))}
      </div>
    )
  }
}

export default SimBlocks
