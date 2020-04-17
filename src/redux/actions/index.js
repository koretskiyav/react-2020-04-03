import { INCREMENT, DECREMENT, DELETE_ORDER_ITEM } from '../constants';

// Определяет шаблон аргументов на каждое действие (action)

export const increment = dish => ({ type: INCREMENT, payload: { dish } });
export const decrement = dish => ({ type: DECREMENT, payload: { dish } });
export const deleteOrderItem = dish => ({
  type: DELETE_ORDER_ITEM,
  payload: { dish }
});
