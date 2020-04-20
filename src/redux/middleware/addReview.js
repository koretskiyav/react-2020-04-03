import uid from 'uid';
import { APPLY_REVIEW, ADD_REVIEW } from '../constants';

export default store => next => action => {
  if (action.type === APPLY_REVIEW) {
    store.dispatch({
      type: ADD_REVIEW,
      payload: {
        userId: uid(),
        id: uid(),
        text: action.payload.reviewText,
        rating: action.payload.rate,
        name: action.payload.userName,
        currentRestaurantId: store.getState().currentRestaurant
      }
    });
  }
  next(action);
};
