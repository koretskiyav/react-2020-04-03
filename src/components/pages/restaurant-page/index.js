import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Restaurants from '../../restaurants';
import Loader from '../../loaded';
import { connect } from 'react-redux';

import {
  restaurantsListSelector,
  restaurantsLoadedSelector,
  restaurantsLoadingSelector
} from '../../../redux/selectors';
import { loadRestaurants } from '../../../redux/actions';

function RestaurantPage({
  restaurants,
  loadRestaurants,
  isLoading,
  isLoaded,
  match
}) {
  useEffect(() => {
    if (!isLoading && !isLoaded) {
      loadRestaurants();
    }
  }, [isLoaded, isLoading, loadRestaurants]);

  if (!isLoaded) return <Loader />;

  return (
    <Switch>
      <Route path={`${match.path}/:id`} component={Restaurants} />;
      <Redirect from={`/restaurants/`} to={`/restaurants/${restaurants[0].id}`}>
        <Restaurants restaurants={restaurants} />
      </Redirect>
    </Switch>
  );
}

export default connect(
  state => ({
    restaurants: restaurantsListSelector(state),
    isLoaded: restaurantsLoadedSelector(state),
    isLoading: restaurantsLoadingSelector(state)
  }),
  { loadRestaurants }
)(RestaurantPage);
