import React from 'react';
import Menu from './menu';
import Reviews from './reviews';
import { Rate } from 'antd';

export default function Restaurant(props) {
  const arrReviewsLength = props.restaurant.reviews.length;

  const ratingSum = props.restaurant.reviews.reduce(
    (prev, val) => prev + val.rating,
    0
  );

  const averageRating = Math.round((ratingSum / arrReviewsLength) * 2) / 2;

  return (
    <div>
      <div>
        <h3>{props.restaurant.name}</h3>
        <Rate disabled value={averageRating} allowHalf />
      </div>
      <Menu restaurant={props.restaurant} />
      <Reviews restaurant={props.restaurant} />
    </div>
  );
}
