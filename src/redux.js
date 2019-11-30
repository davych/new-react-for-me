import { combineReducers } from 'redux'
import { reducers as corporation } from './services/corporation'
export default combineReducers({
    ...corporation
})