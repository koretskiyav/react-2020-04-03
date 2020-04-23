import { ADD_REVIEW } from '../constants';

export default (state = {}, action) => {
  const { type, payload, reviewId, userId } = action;

  switch (type) {
    case ADD_REVIEW:
      const { text, rating } = payload.review;
      return {
        ...state,
        [reviewId]: { id: reviewId, userId, text, rating }
      };
    default:
      return state;
  }
};
