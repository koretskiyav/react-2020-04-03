import {
  INCREMENT,
  DECREMENT,
  REMOVE,
  CREATE_REVIEW,
  CREATE_USER,
  CREATE_REVIEW_WITH_USER,
  CHANGE_RESTAURANT,
  ADD_REVIEW_ID_TO_RESTAURANT
} from '../constants';

export const increment = id => ({ type: INCREMENT, payload: { id } });
export const decrement = id => ({ type: DECREMENT, payload: { id } });
export const remove = id => ({ type: REMOVE, payload: { id } });

export const createReviewWithUser = review => ({
  type: CREATE_REVIEW_WITH_USER,
  review
});
export const createReview = review => ({ type: CREATE_REVIEW, review });
export const createUser = user => ({ type: CREATE_USER, user });

export const changeRestaurant = restaurantId => ({
  type: CHANGE_RESTAURANT,
  restaurantId
});

export const addReviewIdToRestaraunt = (reviewId, restaurantId) => ({
  type: ADD_REVIEW_ID_TO_RESTAURANT,
  reviewId,
  restaurantId
});
