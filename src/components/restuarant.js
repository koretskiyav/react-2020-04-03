import React from 'react';
import Reviews from './reviews';
import Menu from './menu';
import { Rate } from 'antd';

export default function Restuarant(props) {
  return (
    <div>
      <Rate disabled value={props.averageRating} />
      {props.restaurant && (
        <div>
          <Menu restaurant={props.restaurant} />
          <Reviews reviews={props.restaurant.reviews} />
        </div>
      )}
    </div>
  );
}
