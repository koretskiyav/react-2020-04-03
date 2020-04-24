import React, { useEffect } from 'react';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';

import Review from './review';
import ReviewForm from './review-form';
import { loadReviews, loadUsers } from '../../redux/actions';
import {
  reviewsLoadingSelector,
  reviewsLoadedSelector,
  usersLoadingSelector,
  usersLoadedSelector
} from '../../redux/selectors';
import { connect } from 'react-redux';
import Loader from '../loaded';

function Reviews({ reviews, restaurantId, ...props }) {
  useEffect(() => {
    if (!props.usersLoaded && !props.usersLoading) {
      props.loadUsers();
    }

    if (!props.reviewsLoaded && !props.reviewsLoading) {
      props.loadReviews(restaurantId);
    }
  }, [props, restaurantId]);

  if (!props.usersLoaded || !props.reviewsLoaded) return <Loader />;

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

const mapStateToProps = createStructuredSelector({
  reviewsLoading: reviewsLoadingSelector,
  reviewsLoaded: reviewsLoadedSelector,
  usersLoading: usersLoadingSelector,
  usersLoaded: usersLoadedSelector
});

export default connect(mapStateToProps, { loadReviews, loadUsers })(Reviews);
