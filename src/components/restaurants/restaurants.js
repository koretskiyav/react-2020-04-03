import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Restaurant from '../restaurant';
import ContentTabs from '../content-tabs';

import {
  restaurantsListSelector,
  restaurantsLoadingSelector
} from '../../redux/selectors';
import { loadRestaurants } from '../../redux/actions';
import Spinner from '../spinner';

function Restaurants({ restaurants, loadRestaurants, isLoading }) {
  useEffect(() => {
    loadRestaurants();
  }, [loadRestaurants]);

  if (isLoading)
    return <Spinner tip="Loading..." size="large" classStyle={true} />;

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
    isLoading: restaurantsLoadingSelector(state)
  }),
  { loadRestaurants }
)(Restaurants);
