import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Row, Col, Typography, Rate, Card } from 'antd';

import { reviewWitUserSelector } from '../../../redux/selectors';

import styles from './review.module.css';

const Review = ({ review: { user = 'Anonymous...', text, rating } }) => (
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
  review: PropTypes.shape({
    user: PropTypes.string,
    text: PropTypes.string,
    rating: PropTypes.number.isRequired
  })
};

export default connect((state, props) => ({
  review: reviewWitUserSelector(state, props)
}))(Review);
