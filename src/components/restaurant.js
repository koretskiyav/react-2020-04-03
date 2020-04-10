import React from 'react';
import { Rate } from 'antd';
import Reviews from './reviews';
import Menu from './menu';

export default function Restaurant(props) {
  const { restaurant } = props;
  let rateSum = 0;

  restaurant.reviews.map(review => {
    rateSum += review.rating;
  });

  const averageRate = Math.round((rateSum / restaurant.reviews.length) * 2) / 2;

  return (
    <div>
      <h2>Average rate</h2>
      <Rate disabled allowHalf value={averageRate} />
      <br />
      <br />
      <Menu menu={restaurant.menu} />
      <Reviews reviews={restaurant.reviews} />
    </div>
  );
}
