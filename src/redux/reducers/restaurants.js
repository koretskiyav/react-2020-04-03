import { normalizedRestaurants } from '../../fixtures';
import { ADD_REVIEW } from '../constants';
import { normalize } from './utils';

const defValue = normalize(normalizedRestaurants);

export default (restaurants = defValue, action) => {
  const { type } = action;

  switch (type) {
    case ADD_REVIEW: {
      const review = action.payload.object;
      const restaurant = restaurants[review.restaurantId];
      const changedActive = {
        ...restaurant,
        reviews: [...restaurant.reviews, review.id]
      };

      return { ...restaurants, [review.restaurantId]: changedActive };
    }
    default:
      return restaurants;
  }
};
