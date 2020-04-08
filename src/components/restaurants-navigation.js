import React from 'react';
import { Button } from 'antd';

export default function RestaurantsNavigation(props) {
  return (
    <div className="navigation">
      {props.restaurants.map(restaurant => (
        <Button
          key={restaurant.id}
          onClick={() => props.onRestaurantChange(restaurant.id)}
        >
          {restaurant.name}
        </Button>
      ))}
    </div>
  );
}
