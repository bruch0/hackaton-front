import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DashboardLawyer from '../pages/DashboardLawyer';
import Home from '../pages/Home';
import LoginLawyer from '../pages/LoginLawyer';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/dashboard-lawyer" exact>
        <DashboardLawyer />
      </Route>
      <Route path="/login" exact>
        <LoginLawyer />
      </Route>
    </Switch>
  );
}

export default Routes;
