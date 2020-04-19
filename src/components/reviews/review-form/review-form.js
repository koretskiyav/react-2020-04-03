import React from 'react';
import { Form, Input, Button, Rate } from 'antd';
import { connect } from 'react-redux';
import { createReviewWithUser } from '../../../redux/actions';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 }
};

const ReviewForm = ({ createReviewWithUser }) => {
  const [form] = Form.useForm();

  const onFinish = values => {
    createReviewWithUser({
      text: values.text,
      userName: values.user,
      rating: values.rate
    });
    form.resetFields();
  };

  return (
    <Form {...layout} form={form} name="basic" onFinish={onFinish}>
      <Form.Item
        label="Username"
        name="user"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Review text"
        name="text"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="rate"
        label="Rate"
        rules={[{ required: true, message: 'Please check rate!' }]}
      >
        <Rate />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default connect(null, { createReviewWithUser })(ReviewForm);
