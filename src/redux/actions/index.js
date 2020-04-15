import { INCREMENT, DECREMENT, CLEAR } from '../constants';

export const increment = dish => ({ type: INCREMENT, payload: { dish } });
export const decrement = dish => ({ type: DECREMENT, payload: { dish } });
export const clear = id => ({ type: CLEAR, payload: { id } });
