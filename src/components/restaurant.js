import React from 'react';
import Menu from './menu';
import Reviews from './reviews';
import { Rate } from 'antd';

export default function Restaurant({ restaurant }) {
  const rateSum = restaurant.reviews.reduce((acc, val) => acc + val.rating, 0);
  const ratesLength = restaurant.reviews.length;
  const averageRate = Math.floor((rateSum / ratesLength) * 2) / 2;
  return (
    <div>
      <h4>{restaurant.name}</h4>
      <div>
        rate: <Rate disabled allowHalf value={averageRate} />
      </div>
      <Menu restaurant={restaurant} />
      <Reviews restaurant={restaurant} />
    </div>
  );
}
