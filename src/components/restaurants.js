import React, { useState, useMemo } from 'react';
import RestaurantsNavigation from './restaurants-navigation';
import Restaurant from './restaurant';

export default function Restaurants(props) {
  const [activeRestaurantId, setActiveRestaurant] = useState(
    props.restaurants[0].id
  );

  const activeRestaurant = useMemo(
    () =>
      props.restaurants.find(
        restaurant => restaurant.id === activeRestaurantId
      ),
    [props.restaurants, activeRestaurantId]
  );

  return (
    <div>
      <RestaurantsNavigation
        active={activeRestaurant}
        restaurants={props.restaurants}
        onRestaurantChange={id => setActiveRestaurant(id)}
      />
      <Restaurant restaurant={activeRestaurant} />
    </div>
  );
}
