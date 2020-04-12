import React from 'react';
import Review from './review';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';

function Reviews({ reviews }) {
  return (
    <Row type="flex" justify="center" gutter={{ xs: 8, sm: 16, md: 24 }}>
      <Col xs={24} md={16}>
        {reviews.map(review => (
          <Review {...review} key={review.id} />
        ))}
      </Col>
    </Row>
  );
}

const reviewsPropTypes = (Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      user: PropTypes.string,
      rating: PropTypes.number.isRequired
    })
  ).isRequired
});

export const reviewsTypes = reviewsPropTypes.reviews;

export default Reviews;
