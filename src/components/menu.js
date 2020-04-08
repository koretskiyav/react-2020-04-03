import React from 'react';
import Dish from './dish';

export default function Menu(props) {
  return (
    <div className="menu">
      <h2>Menu:</h2>
      <div className="dish-cards">
        {props.restaurant.menu.map(dish => (
          <Dish key={dish.id} dish={dish} />
        ))}
      </div>
    </div>
  );
}
