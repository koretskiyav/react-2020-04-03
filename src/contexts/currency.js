import { createContext } from 'react';

export const currencies = {
  rub: {
    sign: '₽',
    ratio: 75.38
  },
  eur: {
    sign: '€',
    ratio: 1.11
  },
  usd: {
    sign: '$',
    ratio: 1
  }
};

const context = createContext(currencies.usd);

export const { Provider, Consumer } = context;

export default context;
