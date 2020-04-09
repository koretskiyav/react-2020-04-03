import React from 'react';
import Dish from './dish';
import { Row } from 'antd';

export default function Menu({ menu }) {
  return (
    <div>
      <Row gutter={16}>
        {menu.map(dish => (
          <Dish key={dish.id} dish={dish} />
        ))}
      </Row>
    </div>
  );
}
