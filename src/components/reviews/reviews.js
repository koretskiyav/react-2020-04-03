import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';

import Review from './review';
import ReviewForm from './review-form';
import { connect } from 'react-redux';
import {
  reviewsLoadingSelector,
  usersLoadingSelector
} from '../../redux/selectors';

function Reviews({ reviews, restaurantId, isLoading }) {
  if (isLoading) return <h3>Loading...</h3>;

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
  reviews: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  isLoading: PropTypes.func.isRequired
};

export default connect(
  (state, props) => ({
    isLoading: usersLoadingSelector(state) || reviewsLoadingSelector(state)
  }),
  null
)(Reviews);
