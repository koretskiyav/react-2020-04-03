import { v4 as uuidv4 } from 'uuid';

export default store => next => action => {
  switch (action.type) {
    case 'ADD_REVIEW':
      const userId = uuidv4();
      const reviewId = uuidv4();
      action.payload.review = { ...action.payload.review, userId, reviewId };
      next(action);
      break;
    default:
      next(action);
  }
};
