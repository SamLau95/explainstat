import React, { Component } from "react"
import { get } from "lodash"
import { Dispatch } from "redux"
import { connect } from "react-redux"

import { Block, State } from "../../types"
import { setSimValAction } from "../../actions"

interface InputProps {
  block: Block
  path: number[]
}

const mapStateToProps = (state: State, ownProps: InputProps) => {
  return {
    ...ownProps,
    value: get(state.sim, ownProps.path, null),
  }
}

const mapDispatchToProps = (dispatch: Dispatch, ownProps: InputProps) => {
  return {
    onNextValue: (val: any) => dispatch(setSimValAction(ownProps.path, val)),
  }
}

interface Props {
  block: Block
  value: any
  onNextValue: Function
}

class Data extends Component<Props> {
  computeNextVal() {
    return this.props.block.args
  }

  componentDidMount() {
    this.props.onNextValue(this.computeNextVal())
  }

  render() {
    const { block, value } = this.props

    return (
      <div className="SimBlock SimBlock__Data">
        data: [{value && value.map((val: any) => val.toString()).join(", ")}]
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Data)
