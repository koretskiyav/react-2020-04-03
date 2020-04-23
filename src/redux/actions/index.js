import {
  INCREMENT,
  DECREMENT,
  REMOVE,
  ADD_REVIEW,
  LOAD_REVIEWS,
  LOAD_RESTAURANTS,
  REQUEST,
  SUCCESS,
  FAILURE,
  LOAD_MENU,
  LOAD_USERS
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

export const loadMenu = restaurantId => ({
  type: LOAD_MENU,
  CallAPI: `/api/dishes?id=${restaurantId}`
});

export const loadReviews = restaurantId => async dispatch => {
  dispatch({ type: LOAD_REVIEWS + REQUEST, payload: { restaurantId } });

  try {
    const data = await fetch(`/api/reviews?id=${restaurantId}`);
    const response = await data.json();

    dispatch({
      type: LOAD_REVIEWS + SUCCESS,
      payload: { restaurantId },
      response
    });
  } catch (error) {
    dispatch({
      type: LOAD_REVIEWS + FAILURE,
      payload: { restaurantId },
      error
    });
  }
};

export const loadUsers = () => async dispatch => {
  dispatch({ type: LOAD_USERS + REQUEST });

  try {
    const data = await fetch('/api/users');
    const response = await data.json();

    dispatch({ type: LOAD_USERS + SUCCESS, response });
  } catch (error) {
    dispatch({ type: LOAD_USERS + FAILURE, error });
  }
};
