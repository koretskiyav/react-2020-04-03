import React from 'react';
import Menu from './menu';
import Reviews from './reviews';
import { Row, Col } from 'antd';

export default function Restaurant(props) {
  return (
    <Row justify="center">
      <Col span={12}>
        <Menu restaurant={props.restaurant} />
      </Col>
      <Col span={12}>
        <Reviews restaurant={props.restaurant} />
      </Col>
    </Row>
  );
}
