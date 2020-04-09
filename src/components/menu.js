import React from 'react';
import { Row, Col } from 'antd';
import Dish from './dish';

export default function Menu(props) {
  return (
    <Row gutter={[24, 24]}>
      {props.restaurant.menu.map(dish => (
        <Col span={6}>
          <Dish key={dish.id} dish={dish} />
        </Col>
      ))}
    </Row>
  );
}
