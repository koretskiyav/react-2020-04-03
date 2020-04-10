import React, { useMemo } from 'react';
import Review from './review';
import { Rate } from 'antd';

export default function Reviews(props) {
  const averageRate = useMemo(() => {
    return props.reviews.length > 0
      ? Math.round(
          (props.reviews.reduce((acc, cv) => acc + cv.rating, 0) /
            props.reviews.length) *
            2
        ) / 2
      : 0;
  }, [props.reviews]);

  return (
    <div style={{ marginTop: '24px' }}>
      <p style={{ fontWeight: 'bold' }}>Rating</p>
      <Rate disabled value={averageRate} />
      <p style={{ fontWeight: 'bold', marginTop: '24px' }}>Reviews</p>
      {props.reviews.map(review => (
        <Review key={review.id} review={review} />
      ))}
    </div>
  );
}
