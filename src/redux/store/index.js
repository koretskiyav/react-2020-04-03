import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers';
import logger from '../middleware/logger';

const store = createStore(reducer, applyMiddleware(logger));

// dev only!
window.store = store;

export default store;
