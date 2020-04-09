import React from 'react';

export const AverageRatingWrap = WrappedComponent => {
  const hocComponent = ({ ...props }) => {
    let averageRating =
      props.reviews.reduce((sum, review) => sum + review.rating, 0) /
      props.reviews.length;
    const roundedRating = Math.round((averageRating / 2) * 2);
    averageRating =
      averageRating.toString().length <= 2
        ? averageRating.toFixed(1)
        : averageRating.toFixed(2);

    return (
      <WrappedComponent
        {...props}
        averageRating={averageRating}
        roundedRating={roundedRating}
      />
    );
  };

  return hocComponent;
};
