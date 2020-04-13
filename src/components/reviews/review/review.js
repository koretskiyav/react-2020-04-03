import React from 'react';
import { Row, Col, Typography, Rate, Card } from 'antd';
import styles from './review.module.css';
import PropTypes from 'prop-types';

const Review = ({ user, text, rating }) => (
  <Card className={styles.review}>
    <Row type="flex" align="middle">
      <Col xs={24} md={18} align="left">
        <Typography.Title className={styles.name} level={4}>
          {user}
        </Typography.Title>
        <Typography.Text className={styles.comment}>{text}</Typography.Text>
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
  rating: PropTypes.number
};

Review.defaultProps = {
  user: 'Anonymous',
  text: '',
  rating: 0
};

export default Review;
