import React from 'react';
import Dish from './Dish';
import './style.css';

export default function Menu({menu}) {
  return (
    <div className="menuStyle">
      <h2>Меню</h2>
      <div className="dishesStyle">
        {menu.map(dish => (
          <Dish key={dish.id} dish={dish} />
        ))}
      </div>
    </div>
  );
}
