import React from 'react';
import Reviews from './reviews';
import Menu from './menu';
import { Rate } from 'antd';

export default function Restuarant(props) {
  const getAverageRating = reviews => {
    return (
      reviews.reduce((sum, current) => sum + current.rating, 0) / reviews.length
    );
  };

  return (
    <div>
      <Rate disabled value={getAverageRating(props.restaurant.reviews)} />
      <div>
        <Menu restaurant={props.restaurant} />
        <Reviews reviews={props.restaurant.reviews} />
      </div>
    </div>
  );
}
