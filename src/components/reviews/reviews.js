import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';

import Review from './review';

function Reviews({ reviews }) {
  return (
    <Row type="flex" justify="center" gutter={{ xs: 8, sm: 16, md: 24 }}>
      <Col xs={24} md={16}>
        {reviews.map(review => (
          <Review
            key={review.id}
            user={review.user}
            text={review.text}
            rating={review.rating}
          />
        ))}
      </Col>
    </Row>
  );
}

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      user: PropTypes.string,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired
    })
  ).isRequired
};

export default Reviews;
