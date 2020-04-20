import { ADD } from '../constants';
import uuid from 'react-uuid';

export default store => next => action => {
  if (action.type === ADD) {
    action.payload.id = uuid();
    action.payload.userId = uuid();
    console.log(1);
  }
  next(action);
};
