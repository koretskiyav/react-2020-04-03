import {
  INCREMENT,
  DECREMENT,
  REMOVE,
  ADD_REVIEW,
  LOAD_COLLECTION,
  LOAD_COLLECTION_SCOPED
} from '../constants';

export const increment = id => ({ type: INCREMENT, payload: { id } });
export const decrement = id => ({ type: DECREMENT, payload: { id } });
export const remove = id => ({ type: REMOVE, payload: { id } });

export const addReview = (review, restaurantId) => ({
  type: ADD_REVIEW,
  payload: { review, restaurantId },
  generateId: ['reviewId', 'userId']
});

export const loadCollection = collectionType => () => ({
  type: LOAD_COLLECTION,
  collectionType,
  CallAPI: `/api/${collectionType}`
});

export const loadCollectionScoped = collectionType => restaurantId => ({
  type: LOAD_COLLECTION_SCOPED,
  collectionType,
  scope: restaurantId,
  CallAPI: `/api/${collectionType}?id=${restaurantId}`
});

// export const loadReviews = restaurantId => async dispatch => {
//   dispatch({ type: LOAD_REVIEWS + REQUEST, payload: { restaurantId } });
//
//   try {
//     const data = await fetch(`/api/reviews?id=${restaurantId}`);
//     const response = await data.json();
//
//     dispatch({
//       type: LOAD_REVIEWS + SUCCESS,
//       payload: { restaurantId },
//       response
//     });
//   } catch (error) {
//     dispatch({
//       type: LOAD_REVIEWS + FAILURE,
//       payload: { restaurantId },
//       error
//     });
//   }
// };
