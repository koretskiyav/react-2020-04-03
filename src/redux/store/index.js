import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../reducers';
import logger from '../middleware/logger';
import uuidAdder from '../middleware/uuid-adder';

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(logger, uuidAdder))
);

// dev only!
window.store = store;

export default store;
