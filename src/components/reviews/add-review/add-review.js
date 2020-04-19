import React from 'react';
import { Form, Input, Button, Rate } from 'antd';
import { addReview } from '../../../redux/actions';
import { connect } from 'react-redux';

function AddReview({ restaurantId, onAddReview }) {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 }
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 }
  };

  const onSubmit = values => {
    onAddReview({ ...values, restaurantId });
  };

  const onFinishFailed = errorInfo => {
    alert('Заполните все поля');
  };

  return (
    <Form
      {...layout}
      name="basic"
      onFinish={onSubmit}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Rating"
        name="rating"
        rules={[{ required: true, message: 'Please input your review!' }]}
      >
        <Rate />
      </Form.Item>

      <Form.Item
        label="Username"
        name="name"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Review"
        name="text"
        rules={[{ required: true, message: 'Please input your review!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

const mapDispatchToProps = {
  onAddReview: addReview
};

export default connect(null, mapDispatchToProps)(AddReview);
