import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import Restaurants from '../../restaurants';
import Loader from '../../loaded';
import { connect } from 'react-redux';

import {
  restaurantsListSelector,
  restaurantsLoadedSelector,
  restaurantsLoadingSelector
} from '../../../redux/selectors';
import { loadRestaurants } from '../../../redux/actions';
import { Typography } from 'antd';

function RestaurantPage({
  restaurants,
  loadRestaurants,
  isLoading,
  isLoaded,
  match,
  history
}) {
  useEffect(() => {
    if (!isLoading && !isLoaded) {
      loadRestaurants();
    }
  }, [isLoaded, isLoading, loadRestaurants]);

  if (isLoading) return <Loader />;

  if (match.isExact) {
    return (
      <>
        <Restaurants match={match} history={history} />
        <Typography.Title style={{ textAlign: 'center' }}>
          Select restaurant
        </Typography.Title>
      </>
    );
  }

  return <Route path={`${match.path}/:id/:tab`} component={Restaurants} />;
}

export default connect(
  state => ({
    restaurants: restaurantsListSelector(state),
    isLoaded: restaurantsLoadedSelector(state),
    isLoading: restaurantsLoadingSelector(state)
  }),
  { loadRestaurants }
)(RestaurantPage);
