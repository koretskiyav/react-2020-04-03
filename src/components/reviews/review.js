import React from 'react';
import { Rate, Card } from 'antd';

export default function Review(props) {
  return (
    <div className="review">
      <Card size="small" title={props.review.user} style={{ width: 630 }}>
        <p>{props.review.text}:</p>
        <p>
          <Rate disabled defaultValue={props.review.rating} />
        </p>
      </Card>
    </div>
  );
}

//ReactDOM.render(<Rate disabled defaultValue={2.5} />, mountNode);
