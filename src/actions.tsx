export const SET_SIM_VAL = "SET_SIM_VAL"

interface SetSimValPayload {
  path: number[]
  val: any
}

interface SetSimValAction {
  type: typeof SET_SIM_VAL
  payload: SetSimValPayload
}

export function setSimValAction(path: number[], val = []): SetSimValAction {
  return {
    type: SET_SIM_VAL,
    payload: { path, val },
  }
}

export type AppActionTypes = SetSimValAction
