import React, { useState, useMemo } from 'react';
import Restaurant from '../restaurant';
import RestaurantsNavigation from '../restaurants-navigation';
import PropTypes from 'prop-types';

function Restaurants({ restaurants }) {
  const [currentId, setCurrentId] = useState(restaurants[0].id);

  const restaurant = useMemo(
    () => restaurants.find(restaurant => restaurant.id === currentId),
    [restaurants, currentId]
  );

  return (
    <div>
      <RestaurantsNavigation
        restaurants={restaurants}
        onRestaurantChange={setCurrentId}
      />
      <Restaurant restaurant={restaurant} />
    </div>
  );
}

Restaurants.propTypes = {
  restaurants: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Restaurants;
