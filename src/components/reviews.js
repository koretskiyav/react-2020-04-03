import React, { useMemo } from 'react';
import Review from './review';
import { Rate, Card, Space, Row } from 'antd';
import '../index.css';

export default function Reviews(props) {
  const countReviews = props.restaurant.reviews.length;
  const totalRate = useMemo(
    () =>
      props.restaurant.reviews.reduce((sum, review) => sum + review.rating, 0),
    [props.restaurant.reviews]
  );
  const avgRate = parseInt((totalRate / countReviews) * 2) / 2;
  return (
    <Card
      title="Reviews"
      extra={
        <span>
          Average Rate: <Rate allowHalf value={avgRate} />
        </span>
      }
      className="card"
    >
      <Row justify="center">
        <Space direction="vertical">
          {props.restaurant.reviews.map(review => (
            <Review key={review.id} review={review} />
          ))}
        </Space>
      </Row>
    </Card>
  );
}
