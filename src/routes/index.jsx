import React from 'react';
import { Switch, Route } from 'react-router-dom';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
        <h1>Página home</h1>
      </Route>
    </Switch>
  );
}

export default Routes;
