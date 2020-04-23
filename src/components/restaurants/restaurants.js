import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Restaurant from '../restaurant';
import ContentTabs from '../content-tabs';

import {
  restaurantsListSelector,
  loadingSelector
} from '../../redux/selectors';

import { loadCollection } from '../../redux/actions';
import { RESTAURANTS_COLLECTION } from '../../redux/constants';

function Restaurants({ restaurants, load, isLoading }) {
  useEffect(() => {
    load();
  }, [load]);

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
  state => {
    return {
      restaurants: restaurantsListSelector(state),
      isLoading: loadingSelector(state, RESTAURANTS_COLLECTION)
    };
  },
  { load: loadCollection(RESTAURANTS_COLLECTION) }
)(Restaurants);
