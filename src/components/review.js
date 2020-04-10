import React from 'react';
import { Rate } from 'antd';

export default function Review(props) {
  const { review } = props;

  return (
    <li>
      <h3>{review.user}</h3>
      <p>{review.text}</p>
      <Rate disabled allowHalf value={review.rating} />
    </li>
  );
}
