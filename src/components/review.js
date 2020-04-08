import React from 'react';
import { Rate } from 'antd';

export default function Review({ review }) {
  return (
    <div>
      <div>text: {review.text}</div>
      <div>
        rating: <Rate disabled allowHalf value={review.rating} />
      </div>
    </div>
  );
}
