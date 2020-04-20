import { INCREMENT, DECREMENT, REMOVE, ADD } from '../constants';

export const increment = id => ({ type: INCREMENT, payload: { id } });
export const decrement = id => ({ type: DECREMENT, payload: { id } });
export const remove = id => ({ type: REMOVE, payload: { id } });
export const add = (restId, name, rating, text) => ({
  type: ADD,
  payload: { restId, name, rating, text }
});
