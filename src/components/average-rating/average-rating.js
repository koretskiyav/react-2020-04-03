import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Rate } from 'antd';
import { connect } from 'react-redux';

function AverageRating(props) {
  const { reviews } = props;

  const rawRating = useMemo(
    () => reviews.reduce((acc, { rating }) => acc + rating, 0) / reviews.length,
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
  reviews: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default connect(null)(AverageRating);
