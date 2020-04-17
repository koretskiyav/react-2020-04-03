import { INCREMENT, DECREMENT, DELETE, DELETE_ALL } from '../constants';

// { [dishId]: amount }
export default (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case INCREMENT:
      return {
        ...state,
        [payload.id]: (state[payload.id] || 0) + 1
      };
    case DECREMENT:
      return {
        ...state,
        [payload.id]: state[payload.id] > 0 ? state[payload.id] - 1 : 0
      };
    case DELETE:
      return {
        ...state,
        [payload.id]: 0
      };
    case DELETE_ALL:
      return {};
    default:
      return state;
  }
};
