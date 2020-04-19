import React from 'react';
import PropTypes from 'prop-types';

import { Row, Col, Typography, Rate, Card } from 'antd';
import styles from './review.module.css';
import { connect } from 'react-redux';

const Review = ({ name, review }) => (
  <Card className={styles.review} data-id="review-card">
    <Row type="flex" align="middle">
      <Col xs={24} md={18} align="left">
        <Typography.Title
          className={styles.name}
          level={4}
          data-id="review-user"
        >
          {name}
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
    id: PropTypes.string,
    userId: PropTypes.string,
    text: PropTypes.string,
    rating: PropTypes.number.isRequired
  }),
  name: PropTypes.string.isRequired
};

Review.defaultProps = {
  user: 'Anonymous'
};

const mapStateToProps = (state, ownProps) => {
  return {
    name: state.users[state.reviews[ownProps.id].userId],
    review: state.reviews[ownProps.id]
  };
};

export default connect(mapStateToProps, null)(Review);
