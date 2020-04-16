import { INCREMENT, DECREMENT, REMOVE } from '../constants';

// { [dishId]: amount }
export default (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case INCREMENT:
      return {
        ...state,
        [payload.id]: {
          ...payload.dish,
          count: (state[payload.id]?.count || 0) + 1
        }
      };
    case DECREMENT:
      return {
        ...state,
        [payload.id]: {
          ...payload.dish,
          count:
            state[payload.id]?.count > 0
              ? (state[payload.id]?.count || 0) - 1
              : 0
        }
      };
    case REMOVE:
      let newState = state;
      delete newState[payload.id];
      return {
        ...newState
      };
    default:
      return state;
  }
};
