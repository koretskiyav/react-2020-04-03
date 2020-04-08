import React from 'react';
import Review from './review';
import { Rate } from 'antd';

export default function Reviews(props) {
  let arrLength = props.restaurant.reviews.length;
  let averageRating =
    Math.round(
      (props.restaurant.reviews.reduce((prev, item) => prev + item.rating, 0) /
        arrLength) *
        2
    ) / 2;

  return (
    <div class="reviews">
      <h2>Reviews:</h2>
      <p>
        <span>average rating: </span>
        <Rate disabled allowHalf value={averageRating} /> ({averageRating})
      </p>
      {props.restaurant.reviews.map(review => (
        <Review key={review.id} review={review} />
      ))}
    </div>
  );
}
