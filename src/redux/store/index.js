import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../reducers';
import logger from '../middleware/logger';
import addReview from '../middleware/addReview';

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(logger, addReview))
);

// dev only!
window.store = store;

export default store;
