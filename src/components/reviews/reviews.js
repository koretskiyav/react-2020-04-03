import React, { useEffect } from 'react';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';

import Review from './review';
import ReviewForm from './review-form';
import { loadReviews, loadUsers } from '../../redux/actions';
import {
  reviewsLoadedSelector,
  usersLoadedSelector
} from '../../redux/selectors';
import { connect } from 'react-redux';
import Loader from '../loaded';

function Reviews({
  reviews,
  restaurantId,
  loadUsers,
  loadReviews,
  usersLoaded,
  reviewsLoaded
}) {
  useEffect(() => {
    loadUsers();
    loadReviews(restaurantId);
  }, [loadReviews, loadUsers, restaurantId]);

  if (!usersLoaded || !reviewsLoaded) return <Loader />;

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
  reviewsLoaded: reviewsLoadedSelector,
  usersLoaded: usersLoadedSelector
});

export default connect(mapStateToProps, { loadReviews, loadUsers })(Reviews);
