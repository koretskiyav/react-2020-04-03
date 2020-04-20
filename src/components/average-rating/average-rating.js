import React from 'react';
import PropTypes from 'prop-types';
import { Rate } from 'antd';
import { connect } from 'react-redux';
import { normalizedRatingSelector } from '../../redux/selectors';

function AverageRating({ rating }) {
  return (
    <div>
      <Rate value={rating} disabled allowHalf />
    </div>
  );
}

AverageRating.propTypes = {
  rating: PropTypes.number.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  rating: normalizedRatingSelector(ownProps.reviews)(state)
});

export default connect(mapStateToProps)(AverageRating);
