import React from 'react'
import { Router, Route, Switch } from 'react-router'
import { createHashHistory } from 'history'
import Home from '../page/home'
import Signin from '../page/auth/signin'



export default props => (
  <Router history={createHashHistory()}>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/signin">
        <Signin />
      </Route>
    </Switch>
  </Router>
)
