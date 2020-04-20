import { normalizedReviews } from '../../fixtures';
import { normalize, schema } from 'normalizr';
import { ADD_REVIEW } from '../constants';
const review = new schema.Entity('reviews');
const defaultReviews = normalize(normalizedReviews, [review]);

// Или так
// const defaultReviews = normalizedReviews.reduce((acc, review) => {
//   acc[review.id] = review;
//   return acc;
// }, {});

export default (reviews = defaultReviews.entities.reviews, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_REVIEW:
      const { name, currentRestaurantId, ...restReviewData } = payload;
      return {
        ...reviews,
        ...{
          [payload.id]: restReviewData
        }
      };
    default:
      return reviews;
  }
};
