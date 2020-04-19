import { v4 as uuidv4 } from 'uuid';

export default () => next => action => {
  switch (action.type) {
    case 'ADD_REVIEW':
      const { review } = action.payload;
      const reviewId = uuidv4();

      action.payload.review = { ...review, id: reviewId };
      next(action);

      break;
    default:
      next(action);
  }
};
