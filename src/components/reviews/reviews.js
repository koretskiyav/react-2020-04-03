import React from 'react';
import PropTypes from 'prop-types';
import AddReview from './addReview/';
import Review from './review';
import { Col, Row } from 'antd';

function Reviews({ reviews }) {
  return (
    <div>
      <Row type="flex" justify="center" gutter={{ xs: 8, sm: 16, md: 24 }}>
        <Col xs={24} md={16}>
          {reviews.map(review => (
            <Review id={review} key={review} />
          ))}
        </Col>
      </Row>
      <AddReview />
    </div>
  );
}

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default Reviews;
