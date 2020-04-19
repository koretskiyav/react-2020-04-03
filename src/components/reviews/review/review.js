import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Row, Col, Typography, Rate, Card } from 'antd';
import styles from './review.module.css';

const Review = ({ review, user }) => (
  <Card className={styles.review} data-id="review-card">
    <Row type="flex" align="middle">
      <Col xs={24} md={18} align="left">
        <Typography.Title
          className={styles.name}
          level={4}
          data-id="review-user"
        >
          {user.name}
        </Typography.Title>
        <Typography.Text className={styles.comment} data-id="review-text">
          {review.text}
        </Typography.Text>
      </Col>
      <Col xs={8} md={6} align="right" className={styles.rateColumn}>
        <Rate disabled value={review.rating} />
      </Col>
    </Row>
  </Card>
);

Review.propTypes = {
  review: PropTypes.shape({
    userId: PropTypes.string.isRequired,
    text: PropTypes.string,
    rating: PropTypes.number.isRequired
  }).isRequired,
  user: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string.isRequired
  })
};

Review.defaultProps = {
  user: { name: 'Anonymous' }
};

Review.mapStateToProps = (state, ownProps) => ({
  review: state.reviews[ownProps.id],
  user: state.users[state.reviews[ownProps.id].userId]
});

export default connect(Review.mapStateToProps)(Review);
