import {
  INCREMENT,
  DECREMENT,
  REMOVE,
  ADD_REVIEW,
  ADD_USER,
  USER_NOT_FOUND
} from '../constants';

export const increment = id => ({ type: INCREMENT, payload: { id } });
export const decrement = id => ({ type: DECREMENT, payload: { id } });
export const remove = id => ({ type: REMOVE, payload: { id } });
export const addReview = review => ({ type: ADD_REVIEW, payload: { review } });
export const addUser = user => ({ type: ADD_USER, payload: { user } });
export const userNotFound = () => ({ type: USER_NOT_FOUND });
