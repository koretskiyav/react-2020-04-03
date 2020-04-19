import { INCREMENT, DECREMENT, REMOVE, ADD_REVIEW } from '../constants';

export const increment = id => ({ type: INCREMENT, payload: { id } });
export const decrement = id => ({ type: DECREMENT, payload: { id } });
export const remove = id => ({ type: REMOVE, payload: { id } });
export const addReview = (restaurantId, username, text, rating = 0) => ({
  type: ADD_REVIEW,
  payload: { restaurantId, username, text, rating }
});
