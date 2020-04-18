import React from 'react';
import PropTypes from 'prop-types';

import Review from './review';
import { Col, Row } from 'antd';

function Reviews({ reviews }) {
  return (
    <Row type="flex" justify="center" gutter={{ xs: 8, sm: 16, md: 24 }}>
      <Col xs={24} md={16}>
        {reviews.map(id => (
          <Review id={id} key={id} />
        ))}
      </Col>
    </Row>
  );
}

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Reviews;
