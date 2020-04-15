import { INCREMENT, DECREMENT, DELETE_ITEM } from '../constants';

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
      if (state[payload.id] && state[payload.id] > 1) {
        return { ...state, [payload.id]: (state[payload.id] || 0) - 1 };
      } else {
        const { [payload.id]: remove, ...restState } = state;
        return restState;
      }
    case DELETE_ITEM:
      const { [payload.id]: remove, ...restState } = state;
      return restState;

    default:
      return state;
  }
};
