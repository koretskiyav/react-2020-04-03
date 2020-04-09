import React from 'react';
import Menu from './menu';
import Reviews from './reviews';
import averageRating from '../hocs/averageRating';
import { Rate } from 'antd';

function Restaurant(props) {
  return (
    <div>
      <h2>
        {props.restaurant.name}
        <Rate
          key={props.restaurant.id}
          disabled
          allowHalf
          defaultValue={props.restaurantRate}
        />
      </h2>
      <Menu restaurant={props.restaurant} />
      <Reviews reviews={props.restaurant.reviews} />
    </div>
  );
}

export default averageRating(Restaurant);
