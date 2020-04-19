import { normalizedRestaurants } from '../../fixtures';
import { ADD_REVIEW } from '../constants';

const defValue = normalizedRestaurants.reduce((acc, item) => {
  acc[item.id] = item;
  return acc;
}, {});

export default (restaurants = defValue, action) => {
  const { type } = action;

  switch (type) {
    case ADD_REVIEW: {
      const review = action.payload.review;
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
