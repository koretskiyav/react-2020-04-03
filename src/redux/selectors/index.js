import { createSelector } from 'reselect';
import { getAverage, getById, idsSelector, mapToList } from './utils';
import {
  DISHES_COLLECTION,
  RESTAURANTS_COLLECTION,
  REVIEWS_COLLECTION,
  USERS_COLLECTION
} from '../constants';

const collectionSelector = collection => state =>
  state.collections[collection].entities;
export const loadingSelector = (state, collection) =>
  state.collections[collection].loading;

const restaurantsSelector = collectionSelector(RESTAURANTS_COLLECTION);
const dishesSelector = collectionSelector(DISHES_COLLECTION);
const reviewsSelector = collectionSelector(REVIEWS_COLLECTION);
const usersSelector = collectionSelector(USERS_COLLECTION);

const orderSelector = state => state.order;

export const restaurantsListSelector = mapToList(restaurantsSelector);
export const productAmountSelector = getById(orderSelector);
export const productSelector = getById(dishesSelector);
const reviewSelector = getById(reviewsSelector);

export const reviewWitUserSelector = createSelector(
  reviewSelector,
  usersSelector,
  (review, users) => ({
    ...review,
    user: review?.userId && users ? users[review.userId]?.name : ''
  })
);

export const averageRatingSelector = createSelector(
  reviewsSelector,
  idsSelector,
  (reviews, ids) => {
    if (Object.keys(reviews).length && ids?.length) {
      const ratings = ids.map(id => reviews[id]?.rating);
      return Math.floor(getAverage(ratings) * 2) / 2;
    }
    return 0;
  }
);

export const orderProductsSelector = createSelector(
  dishesSelector,
  orderSelector,
  (products, order) => {
    return Object.keys(order)
      .filter(productId => order[productId] > 0)
      .map(productId => products[productId])
      .map(product => ({
        product,
        amount: order[product.id],
        subtotal: order[product.id] * product.price
      }));
  }
);

export const totalSelector = createSelector(
  orderProductsSelector,
  orderProducts =>
    orderProducts.reduce((acc, { subtotal }) => acc + subtotal, 0)
);
