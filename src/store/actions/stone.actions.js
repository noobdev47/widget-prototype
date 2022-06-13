import { GETSTONEDETAIL } from "../action_types/index"


export const getStoneDetail = (data) => async dispatch => {
  try {
    // const data = await loginService(params)
    dispatch({ type: GETSTONEDETAIL, payload: data })
    // return data
  } catch (err) {
    throw err
  }
}