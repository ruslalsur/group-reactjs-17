import React from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {routes} from './routes'
import {store} from './store'

ReactDom.render(
   <Provider store={store}>
      <BrowserRouter>
         <Switch>
            {routes.map((item, index) => (<Route key={index} {...item} />))}
         </Switch>
      </BrowserRouter>
   </Provider>, 
    document.getElementById('root')
)