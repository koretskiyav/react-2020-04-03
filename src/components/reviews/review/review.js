import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Row, Col, Typography, Rate, Card } from 'antd';
import { CSSTransition } from 'react-transition-group';

import { reviewWitUserSelector } from '../../../redux/selectors';

import styles from './review.module.css';
import animationStyles from './review-animation.module.css';

const Review = ({ review }) => {
  if (!review) return null;

  const { user = 'Anonymous', text, rating } = review;

  return (
    <CSSTransition timeout={500} classNames={animationStyles} in appear>
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
    </CSSTransition>
  );
};

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
