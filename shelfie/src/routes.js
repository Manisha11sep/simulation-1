import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';


export default (
  <Switch>
    <Route component={ Form} exact path="/form" />

  </Switch>
)