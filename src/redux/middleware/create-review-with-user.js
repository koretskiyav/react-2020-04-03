import { CREATE_REVIEW_WITH_USER } from '../constants';
import { v4 as uuidv4 } from 'uuid';
import { createReview, createUser, addReviewIdToRestaraunt } from '../actions';

export default store => next => action => {
  if (action.type === CREATE_REVIEW_WITH_USER) {
    const userId = uuidv4();
    const reviewId = uuidv4();
    return [
      store.dispatch(
        createUser({
          id: userId,
          name: action.review.userName
        })
      ),
      store.dispatch(
        createReview({
          id: reviewId,
          userId,
          text: action.review.text,
          rating: action.review.rating
        })
      ),
      store.dispatch(
        addReviewIdToRestaraunt(reviewId, store.getState().selectedRestaurantId)
      )
    ];
  } else {
    next(action);
  }
};
