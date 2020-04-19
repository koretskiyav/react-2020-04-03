import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../reducers';
import { logger, uuid, createUser } from '../middleware';

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(logger, createUser, uuid))
);

// dev only!
window.store = store;

export default store;
