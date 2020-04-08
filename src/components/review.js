import React from 'react';
import { Rate } from 'antd';

export default function Review(props) {
  return (
    <div>
      <p>
        {props.review.user}
        <Rate disabled defaultValue={props.review.rating} />
      </p>
      <p>{props.review.text}</p>
    </div>
  );
}
