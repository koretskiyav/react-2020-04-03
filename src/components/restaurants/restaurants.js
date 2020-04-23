import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Restaurant from '../restaurant';
import ContentTabs from '../content-tabs';

import {
  restaurantsListSelector,
  restaurantsLoadingSelector,
  usersLoadingSelector
} from '../../redux/selectors';
import { loadRestaurants, loadUsers } from '../../redux/actions';

function Restaurants({ restaurants, loadRestaurants, loadUsers, isLoading }) {
  useEffect(() => {
    loadRestaurants();
    loadUsers();
  }, []);

  if (isLoading) return <h3>Loading...</h3>;

  const items = restaurants.map(restaurant => ({
    tabTitle: restaurant.name,
    tabContent: <Restaurant restaurant={restaurant} />
  }));
  return <ContentTabs items={items} />;
}

Restaurants.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default connect(
  state => ({
    restaurants: restaurantsListSelector(state),
    isLoading: restaurantsLoadingSelector(state) || usersLoadingSelector(state)
  }),
  { loadRestaurants, loadUsers }
)(Restaurants);
