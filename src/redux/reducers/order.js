import { INCREMENT, DECREMENT, CLEAR } from '../constants';

export default (state = {}, action) => {
  const { type, payload } = action;
  let dish = undefined;
  switch (type) {
    case INCREMENT:
      dish = state[payload.dish.id];
      return {
        ...state,
        [payload.dish.id]: {
          ...payload.dish,
          count: (dish ? dish.count : 0) + 1
        }
      };
    case DECREMENT:
      dish = state[payload.dish.id];
      if (!dish) {
        return state;
      }
      if (dish.count === 1) {
        const newState = Object.assign({}, state);
        delete newState[payload.dish.id];
        return newState;
      }
      return {
        ...state,
        [payload.dish.id]: {
          ...payload.dish,
          count: dish.count - 1
        }
      };
    case CLEAR:
      const newState = Object.assign({}, state);
      delete newState[payload.id];
      return newState;
    default:
      return state;
  }
};
