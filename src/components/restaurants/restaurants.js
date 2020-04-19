import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Restaurant from '../restaurant';
import ContentTabs from '../content-tabs';

function Restaurants({ restaurants }) {
  const items = Object.keys(restaurants).map(restaurantId => ({
    tabTitle: restaurants[restaurantId].name,
    tabContent: <Restaurant id={restaurantId} />
  }));
  return <ContentTabs items={items} />;
}

Restaurants.propTypes = {
  restaurants: PropTypes.object.isRequired
};

export default connect(state => ({
  restaurants: state.restaurants
}))(Restaurants);
