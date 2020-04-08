import React from 'react';
import Rate from './rate';

export const Review = ({ review }) => {
  return (
    <>
      <p>{review.user}</p>
      <p>{review.text}</p>
      <Rate rating={review.rating} />
    </>
  );
};

export default Review;
