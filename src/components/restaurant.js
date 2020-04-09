import React from 'react';
import Menu from './menu';
import Reviews from './reviews';
import AverageRating from './averageRating';
import { RestaurantWrap } from '../hocs';

const Restaurant = ({ selectedRestaurant, toggleID, isToggledID }) => {
  const button = <button onClick={() => toggleID(0)}>Show Rating</button>;

  return (
    <div>
      <Menu restaurant={selectedRestaurant} />
      <AverageRating reviews={selectedRestaurant.reviews} />
      {/* не самая лучшая реализация... */}
      {(isToggledID !== selectedRestaurant.id && (
        <Reviews selectedRestaurant={selectedRestaurant} toggle={toggleID} />
      )) ||
        button}
    </div>
  );
};

export default RestaurantWrap(Restaurant);
