import React from 'react';
import { Menu } from 'antd';

export default function RestaurantsNavigation(props) {
  const handleClick = e => {
    props.onRestaurantChange(e.key);
  };

  return (
    <Menu
      onClick={handleClick}
      selectedKeys={props.active.id}
      mode="horizontal"
    >
      {props.restaurants.map(restaurant => (
        <Menu.Item key={restaurant.id}>{restaurant.name}</Menu.Item>
      ))}
    </Menu>
  );
}
