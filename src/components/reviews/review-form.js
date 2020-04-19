import React from 'react';
import { Form, Input, Button, Rate } from 'antd';
import { connect } from 'react-redux';
import { addReview } from '../../redux/actions';

const ReviewForm = props => {
  const { restaurantId, addReview } = props;
  const [newReviewForm] = Form.useForm();

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 }
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 8 }
  };

  const onFinish = ({ name, text, rating }) => {
    newReviewForm.resetFields();
    addReview(restaurantId, name, { text, rating: rating || 0 });
  };

  return (
    <Form form={newReviewForm} {...layout} onFinish={onFinish}>
      <Form.Item label="Name" name="name">
        <Input />
      </Form.Item>
      <Form.Item
        label="Review"
        name="text"
        rules={[{ required: true, message: 'Please input your review!' }]}
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item label="Rate" name="rating">
        <Rate />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Add review
        </Button>
      </Form.Item>
    </Form>
  );
};

export default connect(null, { addReview })(ReviewForm);
