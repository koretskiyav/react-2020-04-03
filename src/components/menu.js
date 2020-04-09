import React from 'react';
import Dish from './dish';
import { Layout } from 'antd';

export default function Menu(props) {
  return (
    <Layout theme="light">
      {props.restaurant.menu.map(dish => (
        <Dish key={dish.id} dish={dish} />
      ))}
    </Layout>
  );
}
