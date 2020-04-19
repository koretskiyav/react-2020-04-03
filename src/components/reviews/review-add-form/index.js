import React from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Form, Input, Button, Rate, Card, Row, Col } from 'antd';

import { addReview } from '../../../redux/actions';

function ReviewAddForm({ restaurantId, addReview }) {
  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 }
  };

  const validateMessages = {
    required: '${label} is required!'
  };

  const [ReviewForm] = Form.useForm();
  const onFinish = review => {
    ReviewForm.resetFields();
    addReview(restaurantId, review);
  };

  return (
    <Card>
      <Row type="flex" align="center">
        <Col span={8}>
          <Form
            {...layout}
            labelAlign="left"
            form={ReviewForm}
            onFinish={onFinish}
            validateMessages={validateMessages}
          >
            <Form.Item name="name" label="Name" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="text" label="Comment">
              <Input.TextArea />
            </Form.Item>
            <Form.Item name="rating" label="Rate" rules={[{ required: true }]}>
              <Rate />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
              <Button type="primary" htmlType="submit">
                Add Review
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Card>
  );
}

ReviewAddForm.propTypes = {
  id: PropTypes.string,
  addReview: PropTypes.func.isRequired
};

export default connect(null, { addReview })(ReviewAddForm);
