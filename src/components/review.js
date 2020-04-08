import React from 'react';

export default function Review(props) {
  return (
    <div>
      <p>{props.review.user}</p>
      <p>{props.review.text}</p>
    </div>
  );
}
