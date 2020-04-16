import { INCREMENT, DECREMENT, RESET } from '../constants';

export const increment = dish => ({ type: INCREMENT, payload: { dish } });
export const decrement = dish => ({ type: DECREMENT, payload: { dish } });
export const reset = dish => ({ type: RESET, payload: { dish } });
