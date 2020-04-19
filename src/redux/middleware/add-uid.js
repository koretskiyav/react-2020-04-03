import { ADD_REVIEW, ADD_USER } from '../constants';
import { v4 as uuidv4 } from 'uuid';

export default store => next => action => {
  switch (action.type) {
    case ADD_REVIEW:
    case ADD_USER: {
      console.log('  + uid');
      next({
        ...action,
        payload: { object: { ...action.payload.object, id: uuidv4() } }
      });
      return;
    }
    default:
      next(action);
  }
};
