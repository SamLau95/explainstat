import { Block, State } from "./types"
import { Action, handleActions } from "redux-actions"
import { setSimValAction, AppActionTypes, SET_SIM_VAL } from "./actions"
import _ from "lodash"

const initialSpec = `
rv sam:
  repeat 100:
    data red, green
    choice
`
const initialBlocks: Block[] = [
  {
    fn: "rv",
    args: ["sam"],
    body: [
      {
        fn: "repeat",
        args: [100],
        body: [
          {
            fn: "data",
            args: ["red", "green"],
            body: [],
          },
          {
            fn: "choice",
            args: [],
            body: [],
          },
        ],
      },
    ],
  },
]

const initialSim: any[] = []

const initialState: State = {
  blocks: initialBlocks,
  spec: initialSpec,
  sim: initialSim,
}

export default function(state = initialState, action: AppActionTypes): State {
  switch (action.type) {
    case SET_SIM_VAL:
      const { path, val } = action.payload
      return {
        ...state,
        sim: _.set(state.sim, path, val),
      }
    default:
      return state
  }
}
