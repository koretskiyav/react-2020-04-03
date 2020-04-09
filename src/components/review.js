import React from 'react';
import { Rate, Row, Col } from 'antd';

export default function Review(props) {
  return (
    <Row gutter={1}>
      <Col>
        <Rate disabled value={props.review.rating} />
        <p>{props.review.text}</p>
      </Col>
    </Row>
  );
}
