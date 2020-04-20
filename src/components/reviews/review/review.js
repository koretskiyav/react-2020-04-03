import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Row, Col, Typography, Rate, Card } from 'antd';

import styles from './review.module.css';

const Review = ({ review }) => (
  <Card className={styles.review} data-id="review-card">
    <Row type="flex" align="middle">
      <Col xs={24} md={18} align="left">
        <Typography.Title
          className={styles.name}
          level={4}
          data-id="review-user"
        >
          {review.userName || 'Anonymous'}
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
    userName: PropTypes.string,
    text: PropTypes.string,
    rating: PropTypes.number.isRequired
  })
};

const mapStateToProps = (state, ownProps) => ({
  review: state.reviews[ownProps.id]
});

export default connect(mapStateToProps)(Review);
