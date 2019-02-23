import React, { Component } from 'react'

export interface Props {
  spec: string
}

class Spec extends Component<Props> {
  render() {
    const { spec } = this.props
    return <pre className="Spec">
      <code>{spec}</code>
    </pre>
  }
}

export default Spec
