import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
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

  if (isLoading) return <Loader />;

  if (match.isExact && isLoaded) {
    return <Redirect to={`${match.path}/${restaurants[0].id}`} />;
  }

  return <Route path={`${match.path}/:id`} component={Restaurants} />;
}

export default connect(
  state => ({
    restaurants: restaurantsListSelector(state),
    isLoaded: restaurantsLoadedSelector(state),
    isLoading: restaurantsLoadingSelector(state)
  }),
  { loadRestaurants }
)(RestaurantPage);
