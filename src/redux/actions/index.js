import { INCREMENT, DECREMENT, REMOVE } from '../constants';

export const increment = ({ id, ...dish }) => ({
  type: INCREMENT,
  payload: { id, dish }
});
export const decrement = ({ id, ...dish }) => ({
  type: DECREMENT,
  payload: { id, dish }
});
export const remove = ({ id, ...dish }) => ({
  type: REMOVE,
  payload: { id, dish }
});
