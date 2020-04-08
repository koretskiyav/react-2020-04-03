import React from 'react';
import { Button, Menu } from 'antd';

export default function RestaurantsNavigation(props) {
  return (
    <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']}>
      {props.restaurants.map(restaurant => (
        <Button
          type="link"
          key={restaurant.id}
          onClick={() => props.onRestaurantChange(restaurant.id)}
        >
          {restaurant.name}
        </Button>
      ))}
    </Menu>
  );
}
