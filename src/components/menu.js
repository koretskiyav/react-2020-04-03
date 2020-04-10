import React from 'react';
import Dish from './dish';

export default function Menu(props) {
  return (
    <div>
      <h2>Menu</h2>
      {props.menu.map(dish => (
        <Dish key={dish.id} dish={dish} />
      ))}
      <br />
    </div>
  );
}
