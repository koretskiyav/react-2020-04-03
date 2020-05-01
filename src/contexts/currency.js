import { createContext } from 'react';

const context = createContext('USD');

export const { Provider, Consumer } = context;
export default context;
