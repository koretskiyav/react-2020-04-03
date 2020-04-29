import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../reducers';
import logger from '../middlewares/logger';
import generateId from '../middlewares/generateId';
import api from '../middlewares/api';
import history from '../../history';

const enhancer = applyMiddleware(
  thunk,
  routerMiddleware(history),
  api,
  generateId,
  logger
);
const store = createStore(reducer, composeWithDevTools(enhancer));

// dev only!
window.store = store;

export default store;
