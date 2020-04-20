import { normalizedRestaurants as defaultRestaurants } from '../../fixtures';
import { ADD } from '../constants';

export default (restaurants = defaultRestaurants, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD:
      return restaurants.map(restaurant => {
        if (restaurant.id === payload.restId)
          restaurant.reviews.push(payload.id);
        return restaurant;
      });
    default:
      return restaurants;
  }
};
