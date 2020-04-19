import React from 'react';
import PropTypes from 'prop-types';

import Review from './review';
import AddReview from './review-add-form';

import { Col, Row } from 'antd';

function Reviews(props) {
  const { restaurantId, reviews } = props;
  return (
    <Row type="flex" justify="center" gutter={{ xs: 8, sm: 16, md: 24 }}>
      <Col xs={24} md={16}>
        {reviews.map(id => (
          <Review id={id} key={id} />
        ))}
      </Col>
      <Col xs={24} md={16}>
        <AddReview restaurantId={restaurantId} />
      </Col>
    </Row>
  );
}

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Reviews;
