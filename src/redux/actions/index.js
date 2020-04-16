import { INCREMENT, DECREMENT, CLEARAMOUNT } from '../constants';

export const increment = (id, name, price) => ({
  type: INCREMENT,
  payload: { id, name, price }
});
export const decrement = (id, name, price) => ({
  type: DECREMENT,
  payload: { id, name, price }
});
export const clearAmount = id => ({ type: CLEARAMOUNT, payload: { id } });
