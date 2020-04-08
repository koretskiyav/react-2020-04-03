import React from 'react';
import { Menu } from 'antd';

export default function RestaurantsNavigation(props) {
  const defaultSelectedId = props.restaurants[0].id;
  return (
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={[defaultSelectedId]}
    >
      {props.restaurants.map(restaurant => (
        <Menu.Item
          key={restaurant.id}
          onClick={() => props.onRestaurantChange(restaurant.id)}
        >
          {restaurant.name}
        </Menu.Item>
      ))}
    </Menu>
  );
}
