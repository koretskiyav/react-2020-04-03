import React from 'react';
import { Rate } from 'antd';

export default function Review(props) {
  return (
    <div>
      <h3>{props.review.user}</h3>
      <Rate disabled value={props.review.rating} />
      <p>{props.review.text}</p>
    </div>
  );
}
