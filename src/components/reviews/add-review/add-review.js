import React from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button, Rate } from 'antd';
import { addReview } from '../../../redux/actions';
import { connect } from 'react-redux';

const layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
};
const validateMessages = {
  required: '${label} is required!'
};

function AddReview(props) {
  const { restaurantId, onAddReview } = props;

  const [ReviewForm] = Form.useForm();
  const onFinish = review => {
    ReviewForm.resetFields();
    onAddReview(restaurantId, review);
  };

  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
      form={ReviewForm}
    >
      <Form.Item
        name="name"
        label="Name"
        rules={[
          {
            required: true
          }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item name="rate" label="Rate">
        <Rate />
      </Form.Item>
      <Form.Item
        name="text"
        label="Review"
        rules={[
          {
            required: true
          }
        ]}
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

const mapStateToProps = (state, ownProps) => ({
  count: state.order[ownProps.id] || 0,
  product: state.products[ownProps.id]
});

const mapDispatchToProps = {
  onAddReview: addReview
};

export default connect(mapStateToProps, mapDispatchToProps)(AddReview);
