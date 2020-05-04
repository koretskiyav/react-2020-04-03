import { createContext } from 'react';

const context = createContext('usd');

window.currency = context;

export const { Provider, Consumer } = context;

export default context;
