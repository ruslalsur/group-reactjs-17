import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import {routerMiddleware} from 'connected-react-router'
import {createBrowserHistory} from 'history'
import storage from 'redux-persist/lib/storage'
import {persistStore, persistReducer} from 'redux-persist'
import {createRootReducer} from 'reducers'
import {apiMiddleware} from 'redux-api-middleware'
import {appAnswerMiddleware} from './middlewares/appAnswerMiddleware'
import {chatsBadgingMiddleware} from './middlewares/chatsBadgingMiddleware'

const customComposeWithDevTools = composeWithDevTools({trace: false})

const persistConfig = {
    key: 'app',
    storage,
    blacklist: ['chatsReducer']
}

export const history = createBrowserHistory()

export const initStore = () => {
   const initialStore = {}

   const store = createStore(
      persistReducer(persistConfig, createRootReducer(history)),
      initialStore,
      customComposeWithDevTools(
         applyMiddleware(
            routerMiddleware(history),
            appAnswerMiddleware,
            chatsBadgingMiddleware,
            apiMiddleware
         )
      )
   )

   return {store, persistor: persistStore(store)}
}
