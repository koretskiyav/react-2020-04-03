import React from 'react';
import { Rate } from 'antd';
import { AverageRatingWrap } from '../hocs';
import { Tooltip } from 'antd';

const AverageRating = props => {
  const { averageRating, roundedRating } = props;
  return (
    <h2>
      {' '}
      Average Rating
      <Tooltip title={averageRating}>
        <span>
          <Rate value={roundedRating} allowHalf></Rate>{' '}
        </span>
      </Tooltip>
    </h2>
  );
};
export default AverageRatingWrap(AverageRating);
