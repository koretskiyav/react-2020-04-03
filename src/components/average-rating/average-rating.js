import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Rate } from 'antd';

import {
  averageRatingSelector,
  existReviewsSelector,
  reviewsLoadingSelector
} from '../../redux/selectors';
import { loadReviews, loadUsers } from '../../redux/actions';

function AverageRating({
  averageRating,
  restaurantId,
  loadUsers,
  loadReviews
}) {
  useEffect(() => {
    loadUsers();
    loadReviews(restaurantId);
  }, [loadUsers, loadReviews, restaurantId]);

  return (
    <div>
      <Rate value={averageRating} disabled allowHalf />
    </div>
  );
}

AverageRating.propTypes = {
  averageRating: PropTypes.number.isRequired
};

const mapStateToProps = (state, props) => ({
  reviews: existReviewsSelector(state, props),
  isLoading: reviewsLoadingSelector(state),
  averageRating: averageRatingSelector(state, props)
});

export default connect(mapStateToProps, { loadUsers, loadReviews })(
  AverageRating
);
