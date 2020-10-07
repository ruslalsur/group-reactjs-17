import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import {rootReducer} from 'reducers'
import {appAnswerMiddleware} from './middlewares/appAnswerMiddleware'

const myComposeWithDevTools = composeWithDevTools({trace: false})

export const store = createStore(
   rootReducer,
   myComposeWithDevTools(
      applyMiddleware(
         appAnswerMiddleware,
         
      )
   )
)
