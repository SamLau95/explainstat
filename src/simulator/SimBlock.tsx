import React, { Component } from "react"

import { Block } from "../types"
import SimBlocks from "./SimBlocks"
import Data from "./builtins/Data"
import Choice from "./builtins/Choice"

interface BuiltinMap {
  [key: string]: typeof Component
}

const builtins: BuiltinMap = {
  data: Data,
  choice: Choice,
}

interface Props {
  block: Block
  path: number[]
}

class SimBlock extends Component<Props> {
  render() {
    const { path, block } = this.props
    const { fn, args, body } = block
    const Builtin = builtins[fn] || false

    if (Builtin) {
      return <Builtin block={block} path={path} />
    }

    return (
      <div className="SimBlock">
        <div>
          {fn} {args}
        </div>
        {body.length > 0 && <SimBlocks blocks={body} path={path} />}
      </div>
    )
  }
}

export default SimBlock
