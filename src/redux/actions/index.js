import {
  INCREMENT,
  DECREMENT,
  REMOVE,
  ADD_REVIEW,
  ADD_USER,
  HANDLE_ERROR,
  ACTIVATE_RESTAURANT
} from '../constants';

export const increment = id => ({ type: INCREMENT, payload: { id } });
export const decrement = id => ({ type: DECREMENT, payload: { id } });
export const remove = id => ({ type: REMOVE, payload: { id } });
export const addReview = object => ({ type: ADD_REVIEW, payload: { object } });
export const addUser = object => ({ type: ADD_USER, payload: { object } });
export const activateRestaurant = id => ({
  type: ACTIVATE_RESTAURANT,
  payload: { id }
});
export const handleError = (action, errorType) => ({
  type: HANDLE_ERROR,
  payload: { action, errorType }
});
