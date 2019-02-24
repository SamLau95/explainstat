import React, { Component } from "react"

import { Block } from "../types"
import SimBlocks from "./SimBlocks"

interface Props {
  block: Block
}

class SimBlock extends Component<Props> {
  render() {
    const { fn, args, body, state } = this.props.block
    return (
      <div className="SimBlock">
        <p>
          {fn} {args}
        </p>
        <div className="SimBlock__children">
          <SimBlocks blocks={body} />
        </div>
      </div>
    )
  }
}

export default SimBlock
