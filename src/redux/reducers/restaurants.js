import { normalizedRestaurants } from '../../fixtures';
import { ACTIVATE_RESTAURANT, ADD_REVIEW } from '../constants';
import { normalize } from './utils';

const defValue = {
  list: normalize(normalizedRestaurants),
  current: 'a757a0e9-03c1-4a2a-b384-8ac21dbe2fb2'
};

export default (restaurants = defValue, action) => {
  const { type } = action;

  switch (type) {
    case ACTIVATE_RESTAURANT: {
      return { ...restaurants, current: action.payload.id };
    }

    case ADD_REVIEW: {
      const review = action.payload.object;
      const restaurant = restaurants.list[restaurants.current];
      const changedCurrent = {
        ...restaurant,
        reviews: [...restaurant.reviews, review.id]
      };

      return {
        list: { ...restaurants.list, [restaurants.current]: changedCurrent },
        current: restaurants.current
      };
    }
    default:
      return restaurants;
  }
};
