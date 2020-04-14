import React, { useMemo } from 'react';
import Menu from './menu';
import Reviews from './reviews';
import { Rate } from 'antd';

export default function Restaurant(props) {
  const { reviews } = props.restaurant;

  const averageRating = useMemo(
    () =>
      Math.round(
        (reviews.reduce((prev, val) => prev + val.rating, 0) / reviews.length) *
          2
      ) / 2,
    [reviews]
  );

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
