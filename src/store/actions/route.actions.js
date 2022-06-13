import { CHANGEROUTE } from "../action_types/index"

export const changeRoute = (data) => async dispatch => {
  try {
    dispatch({ type: CHANGEROUTE, payload: data })
  } catch (err) {
    throw err
  }
}