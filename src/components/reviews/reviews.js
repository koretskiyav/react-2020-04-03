import React from 'react';
import PropTypes from 'prop-types';

import Review from './review';
import { Col, Row } from 'antd';
import AddReview from './add-review';

function Reviews({ reviews, restaurantId }) {
  return (
    <Row type="flex" justify="center" gutter={{ xs: 8, sm: 16, md: 24 }}>
      <Col xs={24} md={16}>
        {reviews.map(review => (
          <Review id={review} key={review} />
        ))}
      </Col>
      <Col xs={24} md={16}>
        <AddReview restaurantId={restaurantId} />
      </Col>
    </Row>
  );
}

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default Reviews;
