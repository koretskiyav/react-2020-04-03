import { normalizedRestaurants as defaultRestaurants } from '../../fixtures';
import { CREATE_REVIEW, ADD_REVIEW_ID_TO_RESTAURANT } from '../constants';

export default (restaurants = defaultRestaurants, action) => {
  const { type } = action;

  switch (type) {
    case ADD_REVIEW_ID_TO_RESTAURANT:
      return restaurants.map(r => {
        if (r.id === action.restaurantId) {
          return {
            ...r,
            reviews: [...r.reviews, action.reviewId]
          };
        }
        return r;
      });
    default:
      return restaurants;
  }
};
