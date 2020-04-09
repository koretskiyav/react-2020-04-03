import React from 'react';
import Menu from './menu';
import Reviews from './reviews';

export default function Restaurant(props) {
  return (
    <div style={{ marginTop: '24px' }}>
      <Menu restaurant={props.restaurant} />
      <Reviews reviews={props.restaurant.reviews} />
    </div>
  );
}
