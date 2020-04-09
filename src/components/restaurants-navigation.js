import React from 'react';

export default function RestaurantsNavigation({
  activeRestaurantId,
  restaurants,
  onRestaurantChange
}) {
  return (
    <div>
      {restaurants.map(restaurant => (
        <button
          key={restaurant.id}
          onClick={() => onRestaurantChange(restaurant.id)}
          style={{
            backgroundColor:
              activeRestaurantId === restaurant.id ? '#40a9ff' : ''
          }}
        >
          {restaurant.name}
        </button>
      ))}
    </div>
  );
}
