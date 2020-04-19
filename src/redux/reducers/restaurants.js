import { normalizedRestaurants } from '../../fixtures';
import { ADD_REVIEW } from '../constants';

const defaultRestaurants = normalizedRestaurants.reduce((acc, restaurant) => {
  acc[restaurant.id] = restaurant;
  return acc;
}, {});

export default (restaurants = defaultRestaurants, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_REVIEW:
      restaurants[payload.restaurantId].reviews = [
        payload.id,
        ...restaurants[payload.restaurantId].reviews
      ];
      return restaurants;
    default:
      return restaurants;
  }
};
