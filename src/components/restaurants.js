import React, { useState, useMemo } from 'react';
import RestaurantsNavigation from './restaurants-navigation';
import Restuarant from './restuarant';

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

  const onRestaurantChange = id => {
    setActiveRestaurant(id);
  };

  return (
    <div>
      <RestaurantsNavigation
        restaurants={props.restaurants}
        onRestaurantChange={id => onRestaurantChange(id)}
      />
      <Restuarant restaurant={activeRestaurant} />
    </div>
  );
}
