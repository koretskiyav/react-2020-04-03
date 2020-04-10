import React from 'react';
import Dish from './dish';

export default function Menu(props) {
  return (
    <div>
      {props.menu.map(dish => (
        <Dish key={dish.id} dish={dish} />
      ))}
    </div>
  );
}
