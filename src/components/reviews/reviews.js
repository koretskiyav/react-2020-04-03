import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';

import Review from './review';
import ReviewForm from './review-form';
import { loadReviews } from '../../redux/actions';
import { connect } from 'react-redux';

function Reviews({ reviews, restaurantId, loadReviews }) {
  useEffect(() => {
    loadReviews(restaurantId);
  }, [loadReviews, restaurantId]);

  return (
    <Row type="flex" justify="center" gutter={{ xs: 8, sm: 16, md: 24 }}>
      <Col xs={24} md={16}>
        {reviews.map(id => (
          <Review id={id} key={id} />
        ))}
        <ReviewForm restaurantId={restaurantId} />
      </Col>
    </Row>
  );
}

Reviews.propTypes = {
  restaurantId: PropTypes.string.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default connect(null, { loadReviews })(Reviews);
