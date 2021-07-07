import React from 'react';
import Menu from './Menu';
import Reviews from './Reviews';

export default function Restaurant({restaurant}) {
  return (
    <div>
      <Reviews reviews={restaurant.reviews}/>
      <Menu menu={restaurant.menu} />
    </div>

  );
}
