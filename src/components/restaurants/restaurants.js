import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Restaurant from '../restaurant';
import ContentTabs from '../content-tabs';
import { activateRestaurant } from '../../redux/actions';

function Restaurants({ restaurants, onActivate }) {
  const items = Object.keys(restaurants).map(id => ({
    tabTitle: restaurants[id].name,
    id,
    tabContent: <Restaurant restaurant={id} />
  }));
  return (
    <ContentTabs items={items} onActivate={i => onActivate(items[i].id)} />
  );
}

Restaurants.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

const mapStateToProps = (state, ownProps) => ({
  restaurants: state.restaurants.list
});

const mapDispatchToProps = {
  onActivate: activateRestaurant
};

export default connect(mapStateToProps, mapDispatchToProps)(Restaurants);
