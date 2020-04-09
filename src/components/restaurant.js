import React from 'react';
import Menu from './menu';
import Reviews from './reviews';
import { Rate } from 'antd';

export default function Restaurant(props) {
  const {
    restaurant: { menu, reviews }
  } = props;
  const mean = reviews.reduce((sum, item, step, reviews) => {
    sum += item.rating;

    if (step === reviews.length - 1) {
      sum = Math.round((sum * 2) / reviews.length) / 2;
    }

    return sum;
  }, 0);

  return (
    <div>
      <Menu menu={menu} />

      <Reviews reviews={reviews} />

      <p>Средний рейтинг</p>
      <p>
        <Rate allowHalf disabled value={mean} />
      </p>
    </div>
  );
}
