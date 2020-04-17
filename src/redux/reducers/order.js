import { INCREMENT, DECREMENT, CLEARAMOUNT } from '../constants';
import { object } from 'prop-types';

// { [dishId]: amount }
export default (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case INCREMENT:
      return {
        ...state,
        [payload.id]:
          typeof state[payload.id] === 'object'
            ? {
                amount: state[payload.id].amount + 1,
                name: payload.name,
                price: payload.price
              }
            : { amount: 1, name: payload.name, price: payload.price }
      };
    case DECREMENT:
      return {
        ...state,
        [payload.id]:
          typeof state[payload.id] === 'object'
            ? {
                amount:
                  state[payload.id].amount - 1 > 0
                    ? state[payload.id].amount - 1
                    : 0,
                name: payload.name,
                price: payload.price
              }
            : { amount: 0, name: payload.name, price: payload.price }
      };
    case CLEARAMOUNT:
      delete state[payload.id];
      return Object.assign({}, state);
    default:
      return state;
  }
};
