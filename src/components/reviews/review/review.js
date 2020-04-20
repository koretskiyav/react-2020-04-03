import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Row, Col, Typography, Rate, Card } from 'antd';
import styles from './review.module.css';

const Review = ({ user, text, rating }) => (
  <Card className={styles.review} data-id="review-card">
    <Row type="flex" align="middle">
      <Col xs={24} md={18} align="left">
        <Typography.Title
          className={styles.name}
          level={4}
          data-id="review-user"
        >
          {user}
        </Typography.Title>
        <Typography.Text className={styles.comment} data-id="review-text">
          {text}
        </Typography.Text>
      </Col>
      <Col xs={8} md={6} align="right" className={styles.rateColumn}>
        <Rate disabled value={rating} />
      </Col>
    </Row>
  </Card>
);

Review.propTypes = {
  user: PropTypes.string,
  text: PropTypes.string,
  rating: PropTypes.number.isRequired
};

const mapStateToProps = (state, ownProps) => {
  const review = state.reviews[ownProps.id];
  const user = state.users[review.userId];
  return {
    user: user ? user.name : 'Anonymous',
    text: review.text,
    rating: review.rating
  };
};

export default connect(mapStateToProps)(Review);
