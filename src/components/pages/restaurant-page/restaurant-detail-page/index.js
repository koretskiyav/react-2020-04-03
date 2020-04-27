import React from 'react';

import Restaurants from '../../../restaurants';
import { Route } from 'react-router-dom';

export default function RestaurantDetailPage({ match, history }) {
  const { id } = match.params;
  if (match.isExact) {
    return <Restaurants restaurantId={id} page="menu" history={history} />;
  } else {
    return (
      <Route
        path={`${match.path}/:page`}
        render={({ match, history }) => (
          <Restaurants
            restaurantId={id}
            page={match.params.page}
            history={history}
          />
        )}
      />
    );
  }
}
