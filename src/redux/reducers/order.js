import { Map } from 'immutable';
import { INCREMENT, DECREMENT, REMOVE } from '../constants';

// { [productId]: amount }
export default (state = new Map(), action) => {
  const { type, payload } = action;
  switch (type) {
    case INCREMENT:
      return state.update(payload.id, value => (value || 0) + 1);
    case DECREMENT:
      return state.update(payload.id, value => Math.max((value || 0) - 1, 0));
    case REMOVE:
      return state.update(payload.id, value => 0);
    default:
      return state;
  }
};
