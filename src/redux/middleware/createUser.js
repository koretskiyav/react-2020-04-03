import { v4 as uuidv4 } from 'uuid';
import { addUser } from '../actions';

export default store => next => action => {
  switch (action.type) {
    case 'ADD_REVIEW':
      const userId = uuidv4();
      store.dispatch(addUser(userId, action.payload.review.name));
      action.payload.review = { ...action.payload.review, userId: userId };
      next(action);

      break;
    default:
      next(action);
  }
};
