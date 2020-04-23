import { combineReducers } from 'redux';
import order from './order';
import collections from './collections';

export default combineReducers({
  order,
  collections
});
