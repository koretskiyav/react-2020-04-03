import React, { useState } from 'react';
import { Radio } from 'antd';

export default function RestaurantsNavigation(props) {
  const [mode, setMode] = useState(props.restaurants[0].id);

  const handleModeChange = mode => setMode(mode);

  return (
    <div>
      <Radio.Group size="large">
        {props.restaurants.map(restaurant => (
          <Radio.Button
            key={restaurant.id}
            onClick={() => props.onRestaurantChange(restaurant.id)}
            value={restaurant.id}
            onChange={handleModeChange.bind(this, restaurant.id)}
          >
            {restaurant.name}
          </Radio.Button>
        ))}
      </Radio.Group>
    </div>
  );
}
