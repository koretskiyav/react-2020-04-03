import { fromJS } from 'immutable';
import { ADD_REVIEW } from '../constants';
import { normalizedRestaurants } from '../../fixtures';
import { arrToMap } from '../utils';

export default (state = fromJS(arrToMap(normalizedRestaurants)), action) => {
  const { type, payload, reviewId } = action;

  switch (type) {
    case ADD_REVIEW:
      return state.updateIn([payload.restaurantId, 'reviews'], reviews =>
        reviews.push(reviewId)
      );
    default:
      return state;
  }
};
