import React from 'react';
import PropTypes from 'prop-types';

import Review from './review';
import { Col, Row } from 'antd';
import AddReview from './add-review';

function Reviews({ reviews, restaurantId }) {
  return (
    <div>
      <Row type="flex" justify="center" gutter={{ xs: 8, sm: 16, md: 24 }}>
        <Col xs={24} md={16}>
          {reviews.map(reviewId => (
            <Review id={reviewId} key={reviewId} />
          ))}
        </Col>
      </Row>
      <AddReview restaurantId={restaurantId} />
    </div>
  );
}

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default Reviews;
