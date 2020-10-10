import React from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {ConnectedRouter} from 'connected-react-router'
import {PersistGate} from 'redux-persist/integration/react'
import {routes} from './routes'
import {initStore, history} from './store'
import {Container} from '@material-ui/core'
import {HeaderContainer} from 'containers/HeaderContainer'

const {store, persistor} = initStore()

ReactDom.render(
   <Provider store={store}>
      <PersistGate persistor={persistor}>
         <ConnectedRouter history={history}>
            <Container>
               <HeaderContainer />
            <Switch>
               {routes.map((item, index) => (<Route key={index} {...item} />))}
            </Switch>
            </Container>
         </ConnectedRouter>
      </PersistGate>
   </Provider>,
   document.getElementById('root')
)
