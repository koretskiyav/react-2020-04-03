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
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      location: PropTypes.object,
      image: PropTypes.string,
      menu: PropTypes.array,
      reviews: PropTypes.array
    })
  ).isRequired
};

export default Restaurants;
