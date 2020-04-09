import React from 'react';
import { Rate, Card } from 'antd';


export default function Review({review}) {
  const {user, text, rating} = review;
  return (
    <Card hoverable title={user}
        extra={<Rate disabled defaultValue={rating} />}
        bordered={true} style={{ width: 300 }}>
      <p>{text}</p>
    </Card>
  );
}
