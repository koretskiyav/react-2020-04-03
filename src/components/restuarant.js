import React, { useMemo } from 'react';
import Reviews from './reviews';
import Menu from './menu';
import { Rate } from 'antd';

export default function Restuarant(props) {
  const avarageRate = useMemo(
    () =>
      props.restaurant.reviews.reduce(
        (sum, current) => sum + current.rating,
        0
      ) / props.restaurant.reviews.length,
    [props.restaurant]
  );

  return (
    <div>
      <Rate disabled value={avarageRate} />
      <div>
        <Menu restaurant={props.restaurant} />
        <Reviews reviews={props.restaurant.reviews} />
      </div>
    </div>
  );
}
