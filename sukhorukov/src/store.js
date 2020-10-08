import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import {routerMiddleware} from 'connected-react-router'
import {createBrowserHistory} from 'history'
import storage from 'redux-persist/lib/storage'
import {persistStore, persistReducer} from 'redux-persist'
import {createRootReducer} from 'reducers'
import {appAnswerMiddleware} from './middlewares/appAnswerMiddleware'

const customComposeWithDevTools = composeWithDevTools({trace: false})

const persistConfig = {
    key: 'app',
    storage,
    // blacklist: ['profileReduser'] - то, что не под грифом "хранить вечно"
}

export const history = createBrowserHistory()

export const initStore = () => {
   const initialStore = {}

   const store = createStore(
      persistReducer(persistConfig, createRootReducer(history)),
      initialStore,
      customComposeWithDevTools(
         applyMiddleware(
            appAnswerMiddleware,
            routerMiddleware(history)
         )
      )
   )

   return {store, persistor: persistStore(store)}
}
