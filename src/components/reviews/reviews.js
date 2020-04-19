import React from 'react';
import PropTypes from 'prop-types';

import Review from './review';
import ReviewForm from './review-form';
import { Col, Row } from 'antd';

function Reviews({ reviews, restaurantId }) {
  return (
    <Row type="flex" justify="center" gutter={{ xs: 8, sm: 16, md: 24 }}>
      <Col xs={24} md={16}>
        {reviews.map(id => (
          <Review key={id} id={id} />
        ))}
      </Col>
      <Col xs={24} md={16}>
        <ReviewForm restaurantId={restaurantId} />
      </Col>
    </Row>
  );
}

Reviews.propTypes = {
  reviews: PropTypes.array.isRequired,
  restaurantId: PropTypes.string.isRequired
};

export default Reviews;
