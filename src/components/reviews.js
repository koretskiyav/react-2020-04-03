import React from 'react';
import Review from './review';

export default function Reviews(props) {
  const { reviews } = props;

  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviews.map(review => (
          <Review key={review.id} review={review} />
        ))}
      </ul>
    </div>
  );
}
