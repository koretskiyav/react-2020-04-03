import React from 'react';
import { Comment, Rate } from 'antd';

export default function Review({ review }) {
  return (
    <div>
      <Comment
        style={{ 'border-bottom': '1px solid #f3f3f3' }}
        author={
          <div>
            <span style={{ 'margin-right': 10 }}>{review.user}</span>
            <Rate
              disabled
              defaultValue={review.rating}
              style={{ 'font-size': 15 }}
            />
          </div>
        }
        content={review.text}
      />
    </div>
  );
}
