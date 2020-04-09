import React from 'react';
import { Rate, Space, Card } from 'antd';

export default function Reviews(props) {
  const baserate = getRate(props.reviews);

  function getRate(reviews) {
    const sum = reviews.reduce(
      (sum, current) => sum + parseInt(current.rating),
      0
    );
    return Math.round((2 * sum) / reviews.length) / 2;
  }

  return (
    <Space direction="vertical">
      <Card title="Средний рейтиг заведения:">
        <p>
          <Rate key={baserate} allowHalf defaultValue={baserate} />
        </p>
      </Card>
      {props.reviews.map(review => (
        <Card title={review.user} style={{ width: 300 }} key={review.id}>
          <p>{review.text}</p>
          <p>
            <Rate allowHalf defaultValue={review.rating} />
          </p>
        </Card>
      ))}
    </Space>
  );
}
