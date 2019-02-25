import React, { Component } from "react"

import { Block } from "../types"
import SimBlock from "./SimBlock"

interface Props {
  blocks: Block[]
  path: number[]
}

class SimBlocks extends Component<Props> {
  render() {
    const { blocks, path } = this.props
    return (
      <div className="SimBlocks">
        {blocks.map((block, i) => (
          <SimBlock key={i} block={block} path={[...path, i]} />
        ))}
      </div>
    )
  }
}

export default SimBlocks
