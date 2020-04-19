import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../reducers';
import logger from '../middleware/logger';
import addUid from '../middleware/add-uid';
import linkUser from '../middleware/link-user';
import errorHandle from '../middleware/handle-error';

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(logger, addUid, linkUser, errorHandle))
);

// dev only!
window.store = store;

export default store;
