import { GETSTONEDETAIL } from "../action_types/index"

const initialState = {
  stoneDetail: {}
}

const stoneReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case GETSTONEDETAIL:
      return {
        ...state,
        stoneDetail: payload
      }

    default: return state
  }
}

export default stoneReducer