import React, { Component } from "react"
import { get } from "lodash"
import { Dispatch } from "redux"
import { connect } from "react-redux"
import _ from "lodash"

import { Block, State } from "../../types"
import { setSimValAction } from "../../actions"

function choice<T>(vals: T[]): T {
  return _.sample(vals) as T
}

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
  test: number
}

class Choice extends Component<Props> {
  requestInputVal() {
    return ["red", "green"]
  }

  computeNextVal() {
    return choice(this.requestInputVal())
  }

  componentDidMount() {
    this.props.onNextValue(this.computeNextVal())
  }

  render() {
    const { value } = this.props

    return <div className="SimBlock SimBlock__Choice">choice: {value}</div>
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Choice)
