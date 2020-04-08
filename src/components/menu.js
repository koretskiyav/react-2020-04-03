import React from 'react';
import Dish from './dish';
import { Card } from 'antd';

export default function Menu(props) {
  return (
    <Card title="Menu">
      {props.restaurant.menu.map(dish => (
        <Dish key={dish.id} dish={dish} />
      ))}
    </Card>
  );
}
