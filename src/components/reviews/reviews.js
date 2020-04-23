import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';

import Review from './review';
import ReviewForm from './review-form';
import { loadReviewsSectionItem } from '../../redux/actions';
import { connect } from 'react-redux';
import { reviewsLoadedSelector } from '../../redux/selectors';
import { LOAD_USERS } from '../../redux/constants';

function Reviews({ reviews, restaurantId, loadReviewsSectionItem }) {
  useEffect(() => {
    loadReviewsSectionItem(restaurantId, 'users', LOAD_USERS);
  }, []);
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

export default connect(state => ({ isLoaded: reviewsLoadedSelector(state) }), {
  loadReviewsSectionItem
})(Reviews);
