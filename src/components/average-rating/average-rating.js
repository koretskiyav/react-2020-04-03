import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Rate } from 'antd';

import {
  averageRatingSelector,
  reviewsLoadingSelector
} from '../../redux/selectors';
import { loadReviews } from '../../redux/actions';

function AverageRating({
  averageRating,
  restaurantId,
  isLoading,
  loadReviews
}) {
  useEffect(() => {
    loadReviews(restaurantId);
  }, [loadReviews, restaurantId]);

  if (isLoading) return <h3 style={{ color: 'red' }}>Loading...</h3>;
  return (
    <div>
      <Rate value={averageRating} disabled allowHalf />
    </div>
  );
}

AverageRating.propTypes = {
  averageRating: PropTypes.number.isRequired,
  restaurantId: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  loadReviews: PropTypes.func.isRequired
};

export default connect(
  (state, props) => ({
    averageRating: averageRatingSelector(state, props),
    isLoading: reviewsLoadingSelector(state)
  }),
  { loadReviews }
)(AverageRating);
