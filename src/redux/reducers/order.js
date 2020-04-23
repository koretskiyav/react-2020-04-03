import { INCREMENT, DECREMENT, REMOVE_ORDER } from '../constants';

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
        [payload.id]: (state[payload.id] || 0) - 1
      };
    case REMOVE_ORDER:
      return Object.entries(state).reduce((acc, [id, count]) => {
        if (payload.id !== id) {
          acc[id] = count;
        }

        return acc;
      }, {});
    default:
      return state;
  }
};
