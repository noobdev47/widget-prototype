import { CHANGEROUTE } from "../action_types/index"

const initialState = {
  previousRoute: '',
  currentRoute: 'main',
}

const routeReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case CHANGEROUTE:
      return {
        ...state,
        currentRoute: payload.currentRoute,
        previousRoute: payload.previousRoute,
      }
    default: return state
  }
}

export default routeReducer