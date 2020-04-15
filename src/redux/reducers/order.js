import { INCREMENT, DECREMENT, CLEAR } from '../constants';

// { [dishId]: {name,amount,price }
export default (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case INCREMENT:
      return {
        ...state,
        [payload.id]: {
          name: payload.name,
          price: payload.price,
          count: state[payload.id] ? state[payload.id].count + 1 : 1
        }
      };
    case DECREMENT:
      let amount;
      if (state[payload.id]) {
        amount = state[payload.id].count ? state[payload.id].count - 1 : 0;
      }
      if (amount) {
        return {
          ...state,
          [payload.id]: {
            name: payload.name,
            price: payload.price,
            count: amount
          }
        };
      } else {
        const newState = { ...state };
        delete newState[payload.id];
        return newState;
      }
    case CLEAR:
      const newState = { ...state };
      delete newState[payload.id];
      return newState;
    default:
      return state;
  }
};
