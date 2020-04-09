import React from 'react';
import { Rate } from 'antd';

export const Review = ({ review }) => {
  return (
    <div className="restaurant__review">
      <p>{review.user}</p>
      <p>{`"${review.text}"`}</p>
      <Rate allowClear allowHalf value={review.rating} />
    </div>
  );
};

export default Review;
