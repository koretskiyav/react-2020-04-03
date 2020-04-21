import { normalizedDishes } from '../../fixtures';
import { arrToMap } from '../utils';

export default (state = arrToMap(normalizedDishes), action) => {
  const { type } = action;

  switch (type) {
    default:
      return state;
  }
};
