import React from 'react';
import Menu from './menu';
import Reviews from './reviews';
import AverageRating from './averageRating';
import { RestaurantWrap } from '../hocs';

const Restaurant = ({ selectedRestaurant, toggle, isToggled }) => {
  return (
    <div>
      <Menu restaurant={selectedRestaurant} />
      <AverageRating reviews={selectedRestaurant.reviews} />
      {/* не самая лучшая реализация... */}
      {isToggled !== selectedRestaurant.id && (
        <Reviews selectedRestaurant={selectedRestaurant} toggle={toggle} />
      )}
    </div>
  );
};

export default RestaurantWrap(Restaurant);
