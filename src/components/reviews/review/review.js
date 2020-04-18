import React from 'react';
import PropTypes from 'prop-types';

import { Row, Col, Typography, Rate, Card } from 'antd';
import styles from './review.module.css';
import { connect } from 'react-redux';

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

Review.defaultProps = {
  user: 'Anonymous'
};

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.reviews[ownProps.id].user,
    text: state.reviews[ownProps.id].text,
    rating: state.reviews[ownProps.id].rating
  };
};

export default connect(mapStateToProps, null)(Review);
