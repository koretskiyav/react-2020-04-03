import React from 'react';
import PropTypes from 'prop-types';
import { Rate } from 'antd';
import { connect } from 'react-redux';
import { averageRatingSelector } from '../../redux/selectors';

function AverageRating({ rawRating }) {
  const normalizedRating = Math.floor(rawRating * 2) / 2;

  return (
    <div>
      <Rate value={normalizedRating} disabled allowHalf />
    </div>
  );
}

AverageRating.propTypes = {
  reviews: PropTypes.array.isRequired,
  rawRating: PropTypes.number.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  rawRating: averageRatingSelector(state, ownProps)
});

export default connect(mapStateToProps)(AverageRating);
