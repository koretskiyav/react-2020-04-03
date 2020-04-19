import { normalizedReviews, normalizedUsers } from '../../fixtures';
import { ADD_REVIEW } from '../constants';

const defaultReviews = normalizedReviews.reduce((acc, review) => {
  acc[review.id] = {
    userName: normalizedUsers.find(user => user.id === review.userId).name,
    ...review
  };
  return acc;
}, {});

export default (reviews = defaultReviews, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_REVIEW:
      return {
        ...reviews,
        [payload.review.id]: {
          ...payload.review
        }
      };
    default:
      return reviews;
  }
};
