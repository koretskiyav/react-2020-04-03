import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Rate } from 'antd';
import { connect } from 'react-redux';

function AverageRating({ reviews }) {
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
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      rating: PropTypes.number.isRequired
    }).isRequired
  ).isRequired
};

const mapStateToProps = (state, ownProps) => {
  let reviews = [];
  ownProps.reviews.map(id => (reviews = [state.reviews[id], ...reviews]));

  return {
    reviews: reviews
  };
};

export default connect(mapStateToProps)(AverageRating);
