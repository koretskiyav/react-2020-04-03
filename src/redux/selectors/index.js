import { createSelector } from 'reselect';
import {
  getAverage,
  getById,
  mapToList,
  existItems,
  propsItems
} from './utils';

const restaurantsSelector = state => state.restaurants.entities.toJS();
const productsSelector = state => state.products.entities;
const orderSelector = state => state.order;
const reviewsSelector = state => state.reviews.entities;
const usersSelector = state => state.users.entities;

export const restaurantsLoadingSelector = state => state.restaurants.loading;
export const menuLoadingSelector = state => state.products.loading;
export const reviewsLoadingSelector = state => state.reviews.loading;

export const restaurantsListSelector = mapToList(restaurantsSelector);
export const productAmountSelector = getById(orderSelector);
export const productSelector = getById(productsSelector);
const reviewSelector = getById(reviewsSelector);
export const existMenuSelector = existItems(productsSelector, propsItems);
export const existReviewsSelector = existItems(reviewsSelector, propsItems);

export const reviewWitUserSelector = createSelector(
  reviewSelector,
  usersSelector,
  (review, users) => ({
    ...review,
    user: users[review.userId]?.name
  })
);

export const averageRatingSelector = createSelector(
  reviewsSelector,
  existReviewsSelector,
  (reviews, ids) => {
    if (Object.keys(ids).length === 0) return 0;
    const ratings = ids.map(id => reviews[id].rating);
    return Math.floor(getAverage(ratings) * 2) / 2;
  }
);

export const orderProductsSelector = createSelector(
  productsSelector,
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
