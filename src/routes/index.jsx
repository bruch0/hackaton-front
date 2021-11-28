import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DashboardLawyer from '../pages/DashboardLawyer';
import DashBoardEmployee from '../pages/DashboardEmployee';
import Home from '../pages/Home';
import LawyersRegistry from '../pages/LawyersRegistry';
import Login from '../pages/Login/index';
import LookForSpecialist from '../pages/LookForSpecialist';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/dashboard-lawyer" exact>
        <DashboardLawyer />
      </Route>
      <Route path="/dashboard-employee" exact>
        <DashBoardEmployee />
      </Route>
      <Route path="/login" exact>
        <Login />
      </Route>

      <Route path="/signup-lawyers">
        <LawyersRegistry />
      </Route>

      <Route path="/search">
        <LookForSpecialist />
      </Route>
    </Switch>
  );
}

export default Routes;
