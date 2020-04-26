import React, { useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import { Typography } from 'antd';
import { connect } from 'react-redux';

import {
  restaurantsListSelector,
  restaurantsLoadingSelector
} from '../../../redux/selectors';
import { loadRestaurants } from '../../../redux/actions';
import Loader from '../../loaded';
import Restaurants from '../../restaurants';

function RestaurantPage({ restaurants, loadRestaurants, isLoading, match }) {
  useEffect(() => {
    loadRestaurants();
  }, [loadRestaurants]);

  if (isLoading) return <Loader />;

  if (match.isExact) {
    return (
      <div>
        <Typography.Title>Select restaurant</Typography.Title>
        {restaurants.map(restaurant => (
          <div key={restaurant.id}>
            <Link to={`${match.path}/${restaurant.id}/menu`}>
              {restaurant.name}
            </Link>
          </div>
        ))}
      </div>
    );
  }

  return <Route path={`${match.path}/:id`} component={Restaurants} />;
}

export default connect(
  state => ({
    restaurants: restaurantsListSelector(state),
    isLoading: restaurantsLoadingSelector(state)
  }),
  { loadRestaurants }
)(RestaurantPage);
