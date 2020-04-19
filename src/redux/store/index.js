import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../reducers';
import createUserAndReview from '../middleware/createUserAndReview';

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(createUserAndReview))
);

// dev only!
window.store = store;

export default store;
