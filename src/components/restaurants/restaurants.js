import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ContentTabs from '../content-tabs';
import { restaurantItemsSelector } from '../../redux/selectors';

const Restaurants = ({ restaurants }) => <ContentTabs items={restaurants} />;

Restaurants.propTypes = {
  restaurants: PropTypes.array.isRequired
};

export default connect(state => ({
  restaurants: restaurantItemsSelector(state)
}))(Restaurants);
