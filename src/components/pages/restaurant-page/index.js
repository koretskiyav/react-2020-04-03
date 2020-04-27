import React, { useEffect } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import Restaurants from '../../restaurants';
import Loader from '../../loaded';
import { connect } from 'react-redux';

import {
  restaurantsListSelector,
  restaurantsLoadingSelector
} from '../../../redux/selectors';
import { loadRestaurants } from '../../../redux/actions';
import { Typography } from 'antd';

function RestaurantPage({
  restaurants,
  loadRestaurants,
  isLoading,
  match,
  history
}) {
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
            <Link to={`${match.path}/${restaurant.id}`}>{restaurant.name}</Link>
          </div>
        ))}
      </div>
    );
  }
  // Не уверен насчёт этого, сделал чтобы изначально редирект шёл на меню, потому не очень выглядит когда переходишь на ресторан а там голые табы
  return (
    <Switch>
      <Route path={`${match.path}/:id/:tabKey`} component={Restaurants} />;
      {/* <Route path={`${match.path}/:id/`} component={Restaurants} />; */}
      <Redirect from={`${match.path}/:id/`} to={`${match.path}/:id/menu`} />
    </Switch>
  );
}

export default connect(
  state => ({
    restaurants: restaurantsListSelector(state),
    isLoading: restaurantsLoadingSelector(state)
  }),
  { loadRestaurants }
)(RestaurantPage);
