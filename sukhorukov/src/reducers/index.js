import {combineReducers} from 'redux'
import {connectRouter} from 'connected-react-router'
import {chatsReducer} from './chatsReducer'
import {profilesReducer} from './profilesReducer'

export const createRootReducer = (history) => combineReducers({
   router: connectRouter(history),
   chatsReducer,
   profilesReducer
})
