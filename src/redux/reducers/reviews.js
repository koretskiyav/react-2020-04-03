import { normalizedReviews } from '../../fixtures';
import { ADD_REVIEW } from '../constants';

const defValue = normalizedReviews.reduce((acc, review) => {
  acc[review.id] = review;
  return acc;
}, {});

export default (reviews = defValue, action) => {
  const { type } = action;

  switch (type) {
    case ADD_REVIEW: {
      const actionReview = action.payload.review;

      const newReview = {
        id: actionReview.id,
        userId: actionReview.userId,
        text: actionReview.text,
        rating: actionReview.rating
      };

      return { ...reviews, [actionReview.id]: newReview };
    }
    default:
      return reviews;
  }
};
