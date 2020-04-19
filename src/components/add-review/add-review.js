import React from 'react';

import { Form, Input, Button, Rate, Row, Col } from 'antd';

const layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16
  }
};

export default restaurantId => {
  const onFinish = values => {
    console.log('Success:', { restaurantId, ...values });
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Row type="flex" justify="center" gutter={{ xs: 8, sm: 16, md: 24 }}>
      <Col xs={24} md={16}>
        <Form
          {...layout}
          name="add-review"
          initialValues={{
            remember: false
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!'
              }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Review"
            name="text"
            rules={[
              {
                required: false
              }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item {...tailLayout} name="rating" valuePropName="value">
            <Rate />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};
