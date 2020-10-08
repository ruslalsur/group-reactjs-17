import React from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {ConnectedRouter} from 'connected-react-router'
import {PersistGate} from 'redux-persist/integration/react'
import {routes} from './routes'
import {initStore, history} from './store'

const {store, persistor} = initStore()

ReactDom.render(
   <Provider store={store}>
      <PersistGate persistor={persistor}>
         <ConnectedRouter history={history}>
            <Switch>
               {routes.map((item, index) => (<Route key={index} {...item} />))}
            </Switch>
         </ConnectedRouter>
      </PersistGate>
   </Provider>,
   document.getElementById('root')
)
