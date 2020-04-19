import React from 'react';
import PropTypes from 'prop-types';
import ReviewForm from './review-form';
import Review from './review';
import { Col, Row } from 'antd';

function Reviews({ reviews }) {
  return (
    <>
      <Row type="flex" justify="center" gutter={{ xs: 8, sm: 16, md: 24 }}>
        <Col xs={24} md={16}>
          {reviews.map(id => (
            <Review key={id} id={id} />
          ))}
        </Col>
      </Row>
      <Row type="flex" justify="center" gutter={{ xs: 8, sm: 16, md: 24 }}>
        <ReviewForm />
      </Row>
    </>
  );
}

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default Reviews;
