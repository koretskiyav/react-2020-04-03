import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Restaurant from '../restaurant';
import ContentTabs from '../content-tabs';

import {
  restaurantsListSelector,
  restaurantsLoadingSelector
} from '../../redux/selectors';
import { loadRestaurants, loadUsers } from '../../redux/actions';

function Restaurants({ restaurants, loadRestaurants, isLoading, loadUsers }) {
  useEffect(() => {
    loadRestaurants();
  }, [loadRestaurants]);

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

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
  ).isRequired,
  loadRestaurants: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  loadUsers: PropTypes.func.isRequired
};

export default connect(
  state => ({
    restaurants: restaurantsListSelector(state),
    isLoading: restaurantsLoadingSelector(state)
  }),
  { loadRestaurants, loadUsers }
)(Restaurants);
