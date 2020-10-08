import {combineReducers} from 'redux'
import {connectRouter} from 'connected-react-router'
import {chatsReducer} from './chatsReducer'
import {profileReducer} from './profileReducer'

export const createRootReducer = (history) => combineReducers({
   router: connectRouter(history),
   chatsReducer,
   profileReducer
})
