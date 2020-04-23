import { combineReducers } from 'redux';
import order from './order';
import collections from './collections';
import products from './products';
import reviews from './reviews';

export default combineReducers({
  order,
  collections,
  products,
  reviews
});
