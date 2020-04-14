import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Rate } from 'antd';

function AverageRating({ reviews }) {
  const rawRating = useMemo(
    () =>
      reviews.length > 0
        ? reviews.reduce((acc, { rating }) => acc + rating, 0) / reviews.length
        : 0,
    [reviews]
  );

  const normalizedRating = Math.floor(rawRating * 2) / 2;
  return (
    <div>
      <Rate value={normalizedRating} disabled allowHalf />
    </div>
  );
}

AverageRating.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      rating: PropTypes.number.isRequired
    }).isRequired
  ).isRequired
};

export default AverageRating;
