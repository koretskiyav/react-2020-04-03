import React, { useMemo } from 'react';
import Menu from './menu';
import Reviews from './reviews';
import { Rate } from 'antd';

function getRatingAvarage(reviews) {
  let avarage = reviews.reduce(
    (accumulator, review) => accumulator + review.rating,
    0
  );
  if (reviews.length) avarage = Math.floor((2 * avarage) / reviews.length) / 2;
  return avarage;
}

export default function Restaurant(props) {
  const ratingAvarage = useMemo(
    () => getRatingAvarage(props.restaurant.reviews),
    [props.restaurant.reviews]
  );
  return (
    <div>
      <Menu restaurant={props.restaurant} />
      <p>
        Средний рейтинг
        <Rate disabled allowHalf defaultValue={ratingAvarage} />
      </p>
      <Reviews reviews={props.restaurant.reviews} />
    </div>
  );
}
