import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../reducers';
import logger from '../middlewares/logger';
import generateId from '../middlewares/generateId';

const enhancer = applyMiddleware(generateId, logger);
const store = createStore(reducer, composeWithDevTools(enhancer));

// dev only!
window.store = store;

export default store;
