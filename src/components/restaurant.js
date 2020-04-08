import React from 'react';
import Menu from './menu';
import Reviews from './reviews';

export default function Restaurant(props) {
  return (
    <div>
      <Menu restaurant={props.restaurant} />
      <Reviews reviews={props.restaurant.reviews} />
    </div>
  );
}
