import { INCREMENT, DECREMENT, DELETE_ORDER_ITEM } from '../constants';

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
      const amount = getAmount(); // state не меняется, если нажать минус при нулевом количестве (когда нет ключа payload.dish.id)
      if (amount > 0) {
        return {
          ...state,
          [payload.dish.id]: { dish: payload.dish, amount: amount - 1 }
        };
      } else return state;
    case DELETE_ORDER_ITEM:
      delete state[payload.dish.id];
      return { ...state };
    default:
      return state;
  }
};
