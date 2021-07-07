import React from 'react';
import Review from './Review';
import './style.css'
import AverageRate from './AverageRate';


export default function Reviews({reviews}) {
  return (
    <div className="reviewsStyle">
      <h2>Отзывы <AverageRate reviews={reviews}/></h2>
      <div className="reviewsGrid">
        {reviews.map(review => (
          <Review key={review.id} review={review}/>
        ))}
      </div>
    </div>
  );
}
