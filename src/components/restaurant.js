import React from 'react';
import Menu from './menu';
import Reviews from './reviews';
import { Rate } from 'antd';

function getRatingAvarage(reviews) {
  let avarage = 0;
  if (reviews.length) {
    for (let review of reviews) avarage += review.rating;
    avarage = Math.floor((2 * avarage) / reviews.length) / 2;
  }
  return avarage;
}

export default function Restaurant(props) {
  return (
    <div>
      <Menu restaurant={props.restaurant} />
      <p>
        Средний рейтинг
        <Rate
          disabled
          allowHalf
          defaultValue={getRatingAvarage(props.restaurant.reviews)}
        />
      </p>
      <Reviews reviews={props.restaurant.reviews} />
    </div>
  );
}
