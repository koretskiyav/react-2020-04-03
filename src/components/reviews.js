import React from 'react';
import Review from './review';

export default function Reviews({ restaurant }) {
  return (
    <div>
      {restaurant.reviews.map(review => (
        <Review key={review.id} review={review} />
      ))}
    </div>
  );
}
