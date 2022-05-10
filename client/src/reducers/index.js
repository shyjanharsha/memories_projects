import { combineReducers } from 'redux'

import postReducers from './postsReducers'
import authReducer from './authReducer'

export default combineReducers({
    postReducers, authReducer
})