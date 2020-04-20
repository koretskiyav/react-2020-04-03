import React from 'react';
//import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Rate, Form, Input, Button } from 'antd';
//import styles from './review.module.css';
//import { userSelector } from '../../../redux/selectors';
import { add } from '../../../redux/actions';

function ReviewAdd(props) {
  const { onAdd, restId } = props;

  const onSubmit = values => {
    console.log(values);
    console.log(restId);
    onAdd(restId, values.user, values.rate, values.review);
  };

  return (
    <Form name="add_review" onFinish={onSubmit}>
      <Form.Item
        label="Your Name"
        name="user"
        rules={[{ required: true, message: 'Please input your name' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item name="rate" label="Rate">
        <Rate />
      </Form.Item>
      <Form.Item name="review" label="Review">
        <Input.TextArea />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          add
        </Button>
      </Form.Item>
    </Form>
  );
}
/*
Review.propTypes = {
  user: PropTypes.string,
  text: PropTypes.string,
  rating: PropTypes.number.isRequired
};
*/

const mapDispatchToProps = {
  onAdd: add
};

export default connect(null, mapDispatchToProps)(ReviewAdd);
