import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Restaurant from '../restaurant';
import ContentTabs from '../content-tabs';

function Restaurants({ restaurants }) {
  const items = Object.entries(restaurants).map(restaurant => ({
    tabTitle: restaurant[1].name,
    tabContent: <Restaurant id={restaurant[0]} />
  }));

  return <ContentTabs items={items} />;
}

Restaurants.propTypes = {
  restaurants: PropTypes.object
};

export default connect(state => ({
  restaurants: state.restaurants
}))(Restaurants);
