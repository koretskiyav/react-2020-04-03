import { normalizedRestaurants as defaultRestaurants } from '../../fixtures';
import { ADD_REVIEW } from '../constants';

// По идеи в качестве объектов надо сделать и массива айдишек
export default (restaurants = defaultRestaurants, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_REVIEW:
      return restaurants.map(restaurant =>
        restaurant.id === payload.currentRestaurantId
          ? { ...restaurant, reviews: restaurant.reviews.concat(payload.id) }
          : restaurant
      );

    default:
      return restaurants;
  }
};
