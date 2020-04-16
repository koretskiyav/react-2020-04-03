import { INCREMENT, DECREMENT } from '../constants';

// выполняет вычисление нового состояния по предыдущему состоянию и фактическим аргументам действия (action)

// Новая структура store.order

// { [dishId]: {dish, amount} }
export default (state = {}, action) => {
  const { type, payload } = action;
  // type - INCREMENT или DECREMENT
  // payload - всегда существует payload.dish - обеспечивается propTypes в dish.js
  const getAmount = () =>
    state[payload.dish.id] ? state[payload.dish.id].amount || 0 : 0;
  switch (type) {
    case INCREMENT:
      return {
        ...state,
        [payload.dish.id]: { dish: payload.dish, amount: getAmount() + 1 }
      };
    case DECREMENT:
      return {
        ...state,
        [payload.dish.id]: {
          dish: payload.dish,
          amount: Math.max(getAmount() - 1, 0)
        }
      };
    default:
      return state;
  }
};
