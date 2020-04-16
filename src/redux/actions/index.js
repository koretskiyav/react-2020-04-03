import { INCREMENT, DECREMENT } from '../constants';

// Определяет шаблон аргументов на каждое действие (action)

export const increment = dish => ({ type: INCREMENT, payload: { dish } });
export const decrement = dish => ({ type: DECREMENT, payload: { dish } });
