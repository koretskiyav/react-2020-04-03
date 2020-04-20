import React, { useMemo } from 'react';
import Store from '../../redux/store';
import PropTypes from 'prop-types';
import { Rate } from 'antd';

function AverageRating({ reviews }) {
  const rawRating = useMemo(() => {
    const reviewsStore = Store.getState().reviews;
    return (
      reviews.reduce((acc, id) => acc + reviewsStore[id].rating, 0) /
      reviews.length
    );
  }, [reviews]);

  const normalizedRating = Math.floor(rawRating * 2) / 2;
  return (
    <div>
      <Rate value={normalizedRating} disabled allowHalf />
    </div>
  );
}

AverageRating.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default AverageRating;
