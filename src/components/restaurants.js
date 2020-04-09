import React, { useState, useMemo } from 'react';
import RestaurantsNavigation from './restaurants-navigation';
import Restuarant from './restuarant';

export default function Restaurants(props) {
  const [activeRestaurantId, setActiveRestaurant] = useState();
  const [averageRating, setAverageRating] = useState();

  const activeRestaurant = useMemo(
    () =>
      props.restaurants.find(
        restaurant => restaurant.id === activeRestaurantId
      ),
    [props.restaurants, activeRestaurantId]
  );

  const getAverageRating = reviews => {
    return (
      reviews.reduce((sum, current) => sum + current.rating, 0) / reviews.length
    );
  };

  const onRestaurantChange = id => {
    const reviews = props.restaurants.find(restaurant => restaurant.id === id)
      .reviews;
    setAverageRating(getAverageRating(reviews));
    setActiveRestaurant(id);
  };

  return (
    <div>
      <RestaurantsNavigation
        restaurants={props.restaurants}
        onRestaurantChange={id => onRestaurantChange(id)}
      />
      <Restuarant restaurant={activeRestaurant} averageRating={averageRating} />
    </div>
  );
}
