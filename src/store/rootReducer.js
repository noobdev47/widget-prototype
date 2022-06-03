import { combineReducers } from 'redux'
import authReducer from './reducers/auth.reducer'

const appReducer = combineReducers({
  Auth: authReducer,
})

const rootReducer = (state, action) => {
  if (action.type === 'auth/logout') {
    return appReducer(undefined, action)
  }

  return appReducer(state, action)
}

export default rootReducer