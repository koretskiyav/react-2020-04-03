import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Restaurant from '../restaurant';
import ContentTabs from '../content-tabs';
import { changeRestaurant } from '../../redux/actions';

function Restaurants({ restaurants, changeRestaurant }) {
  const items = restaurants.map(restaurant => ({
    tabTitle: restaurant.name,
    tabContent: <Restaurant restaurant={restaurant} />
  }));
  return (
    <ContentTabs
      items={items}
      onChange={i => changeRestaurant(restaurants[i].id)}
    />
  );
}

Restaurants.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

const mapStateToProps = state => ({
  restaurants: state.restaurants
});

const mapDispatchToProps = { changeRestaurant };

export default connect(mapStateToProps, mapDispatchToProps)(Restaurants);
