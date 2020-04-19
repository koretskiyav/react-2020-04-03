import { ADD_REVIEW, ADD_USER } from '../constants';
import { v4 as uuidv4 } from 'uuid';

export default store => next => action => {
  switch (action.type) {
    case ADD_REVIEW: {
      next({
        ...action,
        payload: { review: { ...action.payload.review, id: uuidv4() } }
      });
      return;
    }
    case ADD_USER: {
      console.log('ADD_USER  + uid');
      next({
        ...action,
        payload: { user: { ...action.payload.user, id: uuidv4() } }
      });
      return;
    }
    default:
      next(action);
  }
};
