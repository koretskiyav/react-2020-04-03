import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import order from './order';
import restaurants from './restaurants';
import products from './products';
import reviews from './reviews';
import users from './users';
import orderStatus from './order-status';
import history from '../../history';

export default combineReducers({
  router: connectRouter(history),
  order,
  orderStatus,
  restaurants,
  products,
  reviews,
  users
});
