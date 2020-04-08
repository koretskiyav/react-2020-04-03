import React from 'react';
import Menu from './menu';
import Reviews from './reviews';

const Restaurant = ({ selectedRestaurant }) => {
  return (
    <div>
      <Menu restaurant={selectedRestaurant} />
      <Reviews reviews={selectedRestaurant.reviews} />
    </div>
  );
};

export default Restaurant;
