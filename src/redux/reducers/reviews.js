import { normalizedReviews } from '../../fixtures';
import { ADD_REVIEW } from '../constants';
import { normalize } from './utils';

const defValue = normalize(normalizedReviews);

export default (reviews = defValue, action) => {
  const { type } = action;

  switch (type) {
    case ADD_REVIEW: {
      const actionReview = action.payload.object;
      return { ...reviews, [actionReview.id]: actionReview };
    }
    default:
      return reviews;
  }
};
