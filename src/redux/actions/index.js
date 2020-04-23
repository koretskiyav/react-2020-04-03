import { INCREMENT, DECREMENT, REMOVE_ORDER } from '../constants';

export const increment = id => ({ type: INCREMENT, payload: { id } });
export const decrement = id => ({ type: DECREMENT, payload: { id } });
export const removeOrder = id => ({ type: REMOVE_ORDER, payload: { id } });
