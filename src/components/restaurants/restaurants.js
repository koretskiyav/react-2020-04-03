import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Restaurant from '../restaurant';
import ContentTabs from '../content-tabs';

function Restaurants({ restaurants }) {
  const items = Object.entries(restaurants).map(([, restaurant]) => ({
    tabTitle: restaurant.name,
    tabContent: <Restaurant id={restaurant.id} />
  }));
  return <ContentTabs items={items} />;
}

Restaurants.propTypes = {
  restaurants: PropTypes.shape({
    id: PropTypes.string
  }).isRequired
};

export default connect(state => ({
  restaurants: state.restaurants
}))(Restaurants);
