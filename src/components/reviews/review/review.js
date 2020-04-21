import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Row, Col, Typography, Rate, Card } from 'antd';
import styles from './review.module.css';
import { reviewsSelector, usersSelector } from '../../../redux/selectors';

function Review(props) {
  const {
    review: { text, rating },
    user: { name }
  } = props;

  return (
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
            {text}
          </Typography.Text>
        </Col>
        <Col xs={8} md={6} align="right" className={styles.rateColumn}>
          <Rate disabled value={rating} />
        </Col>
      </Row>
    </Card>
  );
}

Review.propTypes = {
  review: PropTypes.shape({
    id: PropTypes.string,
    userId: PropTypes.string,
    text: PropTypes.string,
    rating: PropTypes.number.isRequired
  }),
  user: PropTypes.shape({
    name: PropTypes.string
  })
};

const mapStateToProps = (state, ownProps) => ({
  review: reviewsSelector(state)[ownProps.id],
  user: usersSelector(state)[reviewsSelector(state)[ownProps.id].userId]
});

export default connect(mapStateToProps)(Review);
