import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';

import Review from './review';
import ReviewForm from './review-form';
import { connect } from 'react-redux';
import {
  existReviewsSelector,
  reviewsLoadingSelector
} from '../../redux/selectors';
import Spinner from '../spinner';

function Reviews({ reviews, restaurantId, isLoading }) {
  if (isLoading) return <Spinner size="small" />;

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
  items: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

const mapStateToProps = (state, props) => ({
  reviews: existReviewsSelector(state, props),
  isLoading: reviewsLoadingSelector(state)
});

export default connect(mapStateToProps)(Reviews);
