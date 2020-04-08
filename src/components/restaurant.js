import React from 'react';
import Menu from './menu';
import Reviews from './reviews';
import { Rate } from 'antd';

export default function Restaurant(props) {
  let reviews = props.restaurant.reviews;
  let mean =
    reviews.length > 0
      ? reviews.map(review => review.rating).reduce((a, b) => a + b, 0) /
        reviews.length
      : 0;
  let avgRating = Math.round(mean * 2) / 2;

  return (
    <div>
      <Rate disabled value={avgRating} allowHalf />
      <Menu restaurant={props.restaurant} />
      <Reviews restaurant={props.restaurant} />
    </div>
  );
}
