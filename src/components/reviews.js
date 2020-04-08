import React from 'react';
import Review from './review';
import { Card } from 'antd';

export default function Reviews({ restaurant }) {
  return (
    <Card title="Reviews">
      {restaurant.reviews.map(review => (
        <Review key={review.id} review={review} />
      ))}
    </Card>
  );
}
