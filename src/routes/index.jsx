import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import EmployeeDashboard from '../pages/Employee';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/employee" exact>
        <EmployeeDashboard />
      </Route>
    </Switch>
  );
}

export default Routes;
