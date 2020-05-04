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
  LOAD_PRODUCTS,
  LOAD_USERS,
  SEND_ORDER
} from '../constants';

import {
  reviewsLoadingSelector,
  reviewsLoadedSelector,
  usersLoadingSelector,
  usersLoadedSelector,
  orderLoadingSelector,
  orderLoadedSelector
} from '../selectors';
import { replace } from 'connected-react-router';

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

export const loadProducts = restaurantId => ({
  type: LOAD_PRODUCTS,
  CallAPI: `/api/dishes?id=${restaurantId}`,
  restaurantId
});

export const sendOrder = () => async (dispatch, getState) => {
  const state = getState();
  const sending = orderLoadingSelector(state);
  const sended = orderLoadedSelector(state);

  if (sending || sended) return;

  dispatch({ type: SEND_ORDER + REQUEST });

  try {
    await fetch('/api/order');

    dispatch(replace('/success-order'));
    dispatch({ type: SEND_ORDER + SUCCESS });
  } catch (error) {
    dispatch(replace('/error'));
    dispatch({ type: SEND_ORDER + FAILURE, error });
  }
};

export const loadReviews = restaurantId => async (dispatch, getState) => {
  const state = getState();
  const loading = reviewsLoadingSelector(state, { restaurantId });
  const loaded = reviewsLoadedSelector(state, { restaurantId });

  if (loading || loaded) return;

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

export const loadUsers = () => async (dispatch, getState) => {
  const state = getState();
  const loading = usersLoadingSelector(state);
  const loaded = usersLoadedSelector(state);

  if (loading || loaded) return;

  dispatch({ type: LOAD_USERS + REQUEST });

  try {
    const data = await fetch('/api/users');
    const response = await data.json();

    dispatch({ type: LOAD_USERS + SUCCESS, response });
  } catch (error) {
    dispatch(replace('/error'));
    dispatch({ type: LOAD_USERS + FAILURE, error });
  }
};
