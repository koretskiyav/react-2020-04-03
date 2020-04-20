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
      // TODO как реализовать в функциональном стиле?
      let newRestaurants = {};
      Object.entries(restaurants).forEach(([id, restaurant]) => {
        if (id === payload.restaurantId) {
          newRestaurants[id] = {
            ...restaurant,
            reviews: [payload.id, ...restaurant.reviews]
          };
        } else {
          newRestaurants[id] = restaurant;
        }
      });
      return newRestaurants;
    default:
      return restaurants;
  }
};
