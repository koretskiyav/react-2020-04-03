import React, { useMemo } from 'react';
import Menu from './menu';
import Reviews from './reviews';
import { Rate } from 'antd';

export default function Restaurant(props) {
  const {
    restaurant: { menu, reviews }
  } = props;
  const mean = useMemo(() => {
    const sum = reviews.reduce((sum, item) => (sum += item.rating), 0);

    return Math.round((sum * 2) / reviews.length) / 2;
  });

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
