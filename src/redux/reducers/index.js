import { combineReducers } from 'redux';
import orderReducer from './order';

// Это сборка substates вместе. Один substate - одна функция заполнения поля объекта store

export default combineReducers({
  order: orderReducer,
  foo: () => 'bar'
});
