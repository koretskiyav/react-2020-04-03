import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Form, Input, Button, Rate } from 'antd';

import { addReview } from '../../../redux/actions';

function AddReviewForm({ restaurantId, addReview }) {
  const [form] = Form.useForm();

  const onFinish = values => {
    addReview(restaurantId, {
      userName: values.username,
      text: values.text,
      rating: values.rating
    });
    form.resetFields();
  };

  return (
    <Form form={form} labelCol={{ span: 4 }} name="basic" onFinish={onFinish}>
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Text"
        name="text"
        rules={[{ required: true, message: 'Please input text' }]}
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item
        label="Rating"
        name="rating"
        rules={[{ required: true, message: 'Please select star' }]}
      >
        <Rate value={undefined} />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 0,
          span: 16
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

AddReviewForm.propTypes = {
  restaurantId: PropTypes.string.isRequired
};

export default connect(null, { addReview })(AddReviewForm);
