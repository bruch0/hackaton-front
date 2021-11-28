import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DashboardLawyer from '../pages/DashboardLawyer';
import DashBoardEmployee from '../pages/DashboardEmployee';
import Home from '../pages/Home';
import Login from '../pages/Login/index';
import RegisterCompany from '../pages/RegisterCompany';

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
      <Route path="/register-company" exact>
        <RegisterCompany />
      </Route>
    </Switch>
  );
}

export default Routes;
