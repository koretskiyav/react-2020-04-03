import React from 'react';
import { Route } from 'react-router-dom';
import Restaurant from '../../restaurant';
import { Switch, Redirect } from 'react-router-dom';

export default function SectionPage({ match, restaurant }) {
  return (
    <Switch>
      <Redirect exact from="/restaurants/:id" to="/restaurants/:id/menu" />
      <Route
        path={`${match.path}/:item`}
        render={routeProps => (
          <Restaurant {...routeProps} restaurant={restaurant} />
        )}
      />
    </Switch>
  );
}
