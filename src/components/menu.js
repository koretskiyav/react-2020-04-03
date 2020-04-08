import React from 'react';
import Dish from './dish';
import { Card, Space, Row } from 'antd';
import '../index.css';

export default function Menu(props) {
  return (
    <Card title="Menu" className="card">
      <Row justify="center">
        <Space direction="vertical">
          {props.restaurant.menu.map(dish => (
            <Dish key={dish.id} dish={dish} />
          ))}
        </Space>
      </Row>
    </Card>
  );
}
