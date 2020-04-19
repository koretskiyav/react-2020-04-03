import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Rate } from 'antd';

import { averageRatingSelector } from '../../redux/selectors';

function AverageRating({ averageRating }) {
  return (
    <div>
      <Rate value={averageRating} disabled allowHalf />
    </div>
  );
}

AverageRating.propTypes = {
  averageRating: PropTypes.number.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  averageRating: averageRatingSelector(ownProps.reviews)(state)
});

export default connect(mapStateToProps)(AverageRating);
