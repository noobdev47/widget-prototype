import { combineReducers } from 'redux'
import authReducer from './reducers/auth.reducer'
import routeReducer from './reducers/route.reducer'
import stoneReducer from './reducers/stone.reducer'

const appReducer = combineReducers({
  Auth: authReducer,
  Route: routeReducer,
  Stone: stoneReducer
})

const rootReducer = (state, action) => {
  if (action.type === 'auth/logout') {
    return appReducer(undefined, action)
  }

  return appReducer(state, action)
}

export default rootReducer