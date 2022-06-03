import thunk from 'redux-thunk'
import rootReducer from './rootReducer'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
const middlewares = [thunk]

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)))
export default store