import React from 'react';
import Review from './review';
import { CloseOutlined } from '@ant-design/icons';

const Reviews = ({ toggle, selectedRestaurant }) => {
  const { reviews } = selectedRestaurant;
  return (
    <div className="reviews">
      <CloseOutlined
        style={{ fontSize: '16px' }}
        className="close-icon"
        onClick={() => toggle(selectedRestaurant.id)}
      />
      {reviews.map(review => (
        <Review key={review.id} review={review} />
      ))}
    </div>
  );
};

export default Reviews;
