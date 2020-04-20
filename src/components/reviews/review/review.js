import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Row, Col, Typography, Rate, Card } from 'antd';
import styles from './review.module.css';
import { userSelector } from '../../../redux/selectors';

function Review(props) {
  const { review, users } = props;
  const { userId, text, rating } = review;
  const user = userSelector(users, userId);

  return (
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
  user: PropTypes.string,
  text: PropTypes.string,
  rating: PropTypes.number.isRequired
};

Review.defaultProps = {
  user: 'Anonymous'
};

const mapStateToProps = (state, ownProps) => ({
  review: state.reviews[ownProps.id],
  users: state.users
});

export default connect(mapStateToProps)(Review);
