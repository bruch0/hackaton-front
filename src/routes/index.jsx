import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DashboardLawyer from '../pages/DashboardLawyer';
import DashBoardEmployee from '../pages/DashboardEmployee';
import Home from '../pages/Home';
import SignUp from '../pages/SignUp/index';
import Login from '../pages/Login/index';
import SignUpCompany from '../pages/SignUpCompany';
import LawyersRegistry from '../pages/LawyersRegistry';
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
      <Route path="/sign-up" exact>
        <SignUp />
      </Route>
      <Route path="/sign-up-company" exact>
        <SignUpCompany />
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
