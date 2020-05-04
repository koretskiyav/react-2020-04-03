import { createContext } from 'react';

const context = createContext('USD');

export const { Provider, Consumer } = context;

export const currencies = {
  USD: { rate: 1, symbol: '$' },
  EUR: { rate: 0.9, symbol: '€' },
  RUB: { rate: 75.38, symbol: '₽' }
};

export default context;
