import React, { createContext, useState } from 'react';

const context = createContext();

const rates = {
  USD: { rate: 1, sign: '$' },
  EUR: { rate: 1 / 1.1, sign: '€' },
  RUB: { rate: 75, sign: '₽' },
  UAH: { rate: 27, sign: '₴' }
};

export function MoneyProvider({ children }) {
  const [currency, setCurrency] = useState('USD');
  const { rate, sign } = rates[currency];
  const m = amount => `${(rate * amount).toFixed(2)} ${sign}`;

  return (
    <context.Provider value={{ currency, setCurrency, m }}>
      {children}
    </context.Provider>
  );
}

export default context;
