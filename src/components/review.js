import React from 'react';
import { Rate } from 'antd';

export default function Review(props) {
  return (
    <div>
      <Rate disabled defaultValue={props.review.rating} />
      <div>Review from: {props.review.user}</div>
      <div>{props.review.text}</div>
    </div>
  );
}
