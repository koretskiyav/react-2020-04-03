import React from 'react';
import { Rate } from 'antd';

export default function Review(props) {
  const { review: { user, text, rating } = {} } = props;

  return (
    <div>
      <p>{user}</p>
      <p>{text}</p>
      <p>
        <Rate allowHalf disabled value={rating} />
      </p>
    </div>
  );
}
