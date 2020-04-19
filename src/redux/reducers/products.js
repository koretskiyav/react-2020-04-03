import { normalizedDishes } from '../../fixtures';
import { normalize } from './utils';

const defaultProducts = normalize(normalizedDishes);

export default (products = defaultProducts, action) => {
  const { type } = action;

  switch (type) {
    default:
      return products;
  }
};
