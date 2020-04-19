import { normalizedRestaurants } from '../../fixtures';
import { CHANGE_RESTAURANT } from '../constants';

const initialRestaurantId = normalizedRestaurants[0].id;

export default (restaurantId = initialRestaurantId, action) => {
  const { type } = action;

  switch (type) {
    case CHANGE_RESTAURANT:
      return action.restaurantId;
    default:
      return restaurantId;
  }
};
