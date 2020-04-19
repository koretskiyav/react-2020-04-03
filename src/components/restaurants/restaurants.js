import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Restaurant from '../restaurant';
import ContentTabs from '../content-tabs';

function Restaurants({ restaurants }) {
  const items = Object.keys(restaurants).map(id => ({
    tabTitle: restaurants[id].name,
    tabContent: <Restaurant restaurant={id} />
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

export default connect(state => ({
  restaurants: state.restaurants
}))(Restaurants);
