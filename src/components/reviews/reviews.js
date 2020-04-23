import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';

import Review from './review';
import ReviewForm from './review-form';
import { loadCollection, loadCollectionScoped } from '../../redux/actions';
import { connect } from 'react-redux';
import { REVIEWS_COLLECTION, USERS_COLLECTION } from '../../redux/constants';
import { loadingSelector } from '../../redux/selectors';

function Reviews({ reviews, restaurantId, loadReviews, loadUsers, isLoading }) {
  useEffect(() => {
    loadUsers();
  }, [loadUsers, restaurantId]);

  useEffect(() => {
    loadReviews(restaurantId);
  }, [loadReviews, restaurantId]);

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
  reviews: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default connect(
  (state, ownProps) => {
    return {
      reviews: ownProps.reviews,
      isLoading:
        loadingSelector(state, REVIEWS_COLLECTION) ||
        loadingSelector(state, USERS_COLLECTION)
    };
  },
  {
    loadReviews: loadCollectionScoped(REVIEWS_COLLECTION),
    loadUsers: loadCollection(USERS_COLLECTION)
  }
)(Reviews);
