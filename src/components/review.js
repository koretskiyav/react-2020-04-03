import React from 'react';
import { Comment, Card, Avatar, Rate } from 'antd';
import { UserOutlined } from '@ant-design/icons';

export default function Review(props) {
  return (
    <Card type="inner">
      <Comment
        avatar={
          <Avatar
            style={{ backgroundColor: '#87d068' }}
            icon={<UserOutlined />}
          />
        }
        content={props.review.text}
        author={
          <span>
            {props.review.user}{' '}
            <Rate disabled defaultValue={props.review.rating} />{' '}
          </span>
        }
      ></Comment>
    </Card>
  );
}
