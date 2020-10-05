import {combineReducers} from 'redux'
import {chatsReducer} from './chatsReducer'
import {profileReducer} from './profileReducer'

export const rootReducer = combineReducers({
    chatsReducer,
    profileReducer
})
