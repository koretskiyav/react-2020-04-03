import React from 'react';

function averageRating(WrappedComponent) {
  const HocComponent = ({ ...props }) => {
    let restaurantRatings = props.restaurant.reviews.map(
      review => review.rating
    );
    let restaurantRate =
      Math.round(
        (restaurantRatings.reduce((sum, rating) => sum + rating) /
          restaurantRatings.length) *
          2
      ) / 2;

    return <WrappedComponent {...props} restaurantRate={restaurantRate} />;
  };

  return HocComponent;
}

export default averageRating;
