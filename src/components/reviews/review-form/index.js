import { Button, Card, Col, Form, Input, Row, Rate, Typography } from 'antd';
import React from 'react';
import PropTypes from 'prop-types';

import styles from './review-form.module.css';
import { connect } from 'react-redux';
import { addReview } from '../../../redux/actions';

const AddReview = ({ onSubmit }) => {
  const [form] = Form.useForm();

  const handleSubmit = values => {
    onSubmit(values);
    form.resetFields();
  };

  return (
    <Card className={styles.reviewForm}>
      <Row type="flex" align="middle">
        <Col xs={24} md={18} align="left">
          <Typography.Title className={styles.addReviewTitle} level={4}>
            Leave your review
          </Typography.Title>
          <Form onFinish={handleSubmit} data-id="review-form" form={form}>
            <Form.Item label="Your name" name="user">
              <Input size="large" />
            </Form.Item>
            <Form.Item label="Your review" name="text">
              <Input.TextArea rows={3} size="large" />
            </Form.Item>
            <Form.Item label="Your rating" name="rating">
              <Rate />
            </Form.Item>
            <Button htmlType="submit" className={styles.submitButton}>
              PUBLISH REVIEW
            </Button>
          </Form>
        </Col>
      </Row>
    </Card>
  );
};

AddReview.propTypes = {
  restaurantId: PropTypes.string,
  onSubmit: PropTypes.func.isRequired
};

export default connect(null, (dispatch, props) => ({
  onSubmit: review => dispatch(addReview(review, props.restaurantId))
}))(AddReview);
