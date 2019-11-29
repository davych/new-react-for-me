import React from 'react'
import { Router, Route, Switch } from 'react-router'
import { createHashHistory } from 'history'
import Home from '../page/home'



export default props => (
  <Router history={createHashHistory()}>
    <Switch>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
)
