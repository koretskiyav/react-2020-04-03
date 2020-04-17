import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../reducers';
import logger from '../middleware/logger';

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(logger))
);

// dev only!
window.store = store;

export default store;
