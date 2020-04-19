import { v4 as uuid } from 'uuid';
import { ADD_REVIEW } from '../constants';

export default store => next => action => {
  if (action.type === ADD_REVIEW) {
    action.payload.userId = uuid();
    action.payload.id = uuid();
  }
  next(action);
};
