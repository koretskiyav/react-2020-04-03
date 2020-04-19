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
      const newRestaurants = Object.assign({}, restaurants);
      newRestaurants[payload.restaurantId] = {
        ...newRestaurants[payload.restaurantId],
        reviews: [
          ...newRestaurants[payload.restaurantId].reviews,
          payload.review.id
        ]
      };
      return newRestaurants;
    default:
      return restaurants;
  }
};
