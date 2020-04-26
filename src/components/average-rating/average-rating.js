import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Rate } from 'antd';

import { averageRatingSelector } from '../../redux/selectors';

function AverageRating({ averageRating }) {
  if (!averageRating) return null;
  return (
    <div>
      <Rate value={averageRating} disabled allowHalf />
    </div>
  );
}

AverageRating.propTypes = {
  averageRating: PropTypes.number.isRequired
};

export default connect((state, props) => ({
  averageRating: averageRatingSelector(state, props)
}))(AverageRating);
