import { INCREMENT, DECREMENT, REMOVE } from '../constants';

// { [dishId]: amount }
export default (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case INCREMENT:
      return {
        ...state,
        [payload.id]: {
          name: payload.name,
          count: state[payload.id] ? state[payload.id].count + 1 : 1,
          price: payload.price
        }
      };
    case DECREMENT:
      return {
        ...state,
        [payload.id]: {
          name: payload.name,
          count:
            state[payload.id] && state[payload.id].count > 0
              ? state[payload.id].count - 1
              : 0,
          price: payload.price
        }
      };
    case REMOVE:
      const newState = { ...state };
      delete newState[payload.id];
      return newState;
    default:
      return state;
  }
};
