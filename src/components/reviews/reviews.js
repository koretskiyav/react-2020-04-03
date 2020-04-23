import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';
import { connect } from 'react-redux';

import Review from './review';
import ReviewForm from './review-form';
import { reviewsLoadingSelector } from '../../redux/selectors';

function Reviews({ reviews, restaurantId, isLoading }) {
  return isLoading ? (
    <h3>Loading...</h3>
  ) : (
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

const mapStateToProps = state => ({
  isLoading: reviewsLoadingSelector(state)
});

export default connect(mapStateToProps)(Reviews);
