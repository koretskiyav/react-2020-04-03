import React from 'react';
import { Col, Row } from 'antd';
import PropTypes from 'prop-types';

import Review from './review';
import AddReviewForm from './add-review-form';

function Reviews({ reviews, restaurantId }) {
  return (
    <Row type="flex" justify="center" gutter={{ xs: 8, sm: 16, md: 24 }}>
      <Col xs={24} md={16}>
        {reviews.map(id => (
          <Review key={id} id={id} />
        ))}
        <AddReviewForm restaurantId={restaurantId} />
      </Col>
    </Row>
  );
}

Reviews.propTypes = {
  restaurantId: PropTypes.string.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default Reviews;
