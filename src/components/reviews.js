import React from 'react';
import { Card, Rate } from 'antd';

const styles = {
  root: {
    paddingTop: 20
  },
  card: {
    width: 400
  }
};

export default function Reviews(props) {
  return (
    <div style={styles.root}>
      {props.reviews.map(review => (
        <div key={review.id} style={styles.root}>
          <Card
            style={styles.card}
            size="small"
            title={review.user}
            extra={<Rate disabled defaultValue={review.rating} />}
          >
            {review.text}
          </Card>
        </div>
      ))}
    </div>
  );
}
