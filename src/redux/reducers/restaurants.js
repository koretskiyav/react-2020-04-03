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
      return Object.fromEntries(
        Object.entries(restaurants).map(([id, restaurant]) => {
          if (id === payload.restaurantId) {
            return [
              id,
              {
                ...restaurant,
                reviews: [payload.id, ...restaurant.reviews]
              }
            ];
          } else {
            return [id, restaurant];
          }
        })
      );
    default:
      return restaurants;
  }
};
