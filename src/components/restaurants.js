import React from 'react';
import Restaurant from './restaurant';
import RestaurantsNavigation from './restaurants-navigation';
import { NavWrap } from '../hocs';

function Restaurants(props) {
  const { activeRestaurant, setActiveRestaurant, activeRestaurantId } = props;
  return (
    <div>
      <RestaurantsNavigation
        restaurants={props.restaurants}
        onRestaurantChange={id => setActiveRestaurant(id)}
        activeRestaurantId={activeRestaurantId}
      />

      <Restaurant selectedRestaurant={activeRestaurant} />
    </div>
  );
}

export default NavWrap(Restaurants);
