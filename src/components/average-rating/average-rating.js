import React from 'react';
import PropTypes from 'prop-types';
import { Rate } from 'antd';
import { connect } from 'react-redux';

function AverageRating({ rawRating }) {
  const normalizedRating = Math.floor(rawRating * 2) / 2;

  return (
    <div>
      <Rate value={normalizedRating} disabled allowHalf />
    </div>
  );
}

AverageRating.propTypes = {
  reviews: PropTypes.array.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  rawRating:
    ownProps.reviews.reduce(
      (acc, reviewId) => acc + state.reviews[reviewId].rating,
      0
    ) / ownProps.reviews.length
});

export default connect(mapStateToProps)(AverageRating);
