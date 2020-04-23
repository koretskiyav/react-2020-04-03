import {
  INCREMENT,
  DECREMENT,
  REMOVE,
  ADD_REVIEW,
  LOAD_REVIEWS,
  LOAD_RESTAURANTS,
  lOAD_PRODUCTS,
  REQUEST,
  SUCCESS,
  FAILURE,
  LOAD_USERS,
  SELECT_NEW_RESTAURANT
} from '../constants';

export const increment = id => ({ type: INCREMENT, payload: { id } });
export const decrement = id => ({ type: DECREMENT, payload: { id } });
export const remove = id => ({ type: REMOVE, payload: { id } });

export const addReview = (review, restaurantId) => ({
  type: ADD_REVIEW,
  payload: { review, restaurantId },
  generateId: ['reviewId', 'userId']
});

export const loadRestaurants = () => ({
  type: LOAD_RESTAURANTS,
  CallAPI: '/api/restaurants'
});

export const loadProducts = () => ({
  type: lOAD_PRODUCTS,
  CallAPI: '/api/dishes'
});

export const loadReviewsSectionItem = (
  restaurantId,
  itemUrl,
  itemType
) => async dispatch => {
  dispatch({ type: LOAD_REVIEWS + REQUEST, payload: { restaurantId } });

  try {
    const data = await fetch(`/api/${itemUrl}?id=${restaurantId}`);
    const response = await data.json();

    dispatch({
      type: itemType + SUCCESS,
      payload: { restaurantId },
      response
    });
  } catch (error) {
    dispatch({
      type: itemType + FAILURE,
      payload: { restaurantId },
      error
    });
  }
};

export const selectNextRestaurant = () => ({
  type: SELECT_NEW_RESTAURANT
});
