import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';

import Restaurant from '../restaurant';
import RestaurantsNavigation from '../restaurants-navigation';
import Basket from '../basket';

function Restaurants({ restaurants }) {
  const [currentId, setCurrentId] = useState(restaurants[0].id);

  const restaurant = useMemo(
    () => restaurants.find(restaurant => restaurant.id === currentId),
    [restaurants, currentId]
  );

  return (
    <div>
      <Basket />
      <RestaurantsNavigation
        restaurants={restaurants}
        onRestaurantChange={setCurrentId}
      />
      <Restaurant restaurant={restaurant} />
    </div>
  );
}

Restaurants.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default Restaurants;
