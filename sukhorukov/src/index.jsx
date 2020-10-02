import React from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {routes} from './routes'

ReactDom.render(
    <BrowserRouter>
       <Switch>
           {routes.map((item, index) => (<Route key={index} {...item} />))}
       </Switch>
    </BrowserRouter>, 
    document.getElementById('root')
)