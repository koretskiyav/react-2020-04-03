import { combineReducers } from 'redux';
import orderReducer from './order';
import menuReducer from './menu.js';

export default combineReducers({
  order: orderReducer,
  menu: menuReducer
});
