import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../reducers';
import logger from '../middleware/logger';
import createReviewWithUser from '../middleware/create-review-with-user';

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(createReviewWithUser))
);

// dev only!
window.store = store;

export default store;
