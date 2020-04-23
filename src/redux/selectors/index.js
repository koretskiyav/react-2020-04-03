import { createSelector } from 'reselect';
import { getAverage, getById, idsSelector, mapToList } from './utils';

const restaurantsSelector = state => state.restaurants.entities.toJS();
const productsSelector = state => state.products.entities;
const orderSelector = state => state.order;
const reviewsSelector = state => state.reviews.entities;
const usersSelector = state => state.users.entities;

export const productsLoadingSelector = state => state.products.loading;
export const restaurantsLoadingSelector = state => state.restaurants.loading;
export const reviewsLoadingSelector = state => state.reviews.loading;
export const usersLoadingSelector = state => state.users.loading;

export const restaurantsListSelector = mapToList(restaurantsSelector);
export const productsListSelector = mapToList(productsSelector);
export const productAmountSelector = getById(orderSelector);
export const productSelector = getById(productsSelector);
const reviewSelector = getById(reviewsSelector);

export const reviewWitUserSelector = createSelector(
  reviewSelector,
  usersSelector,
  (review, users) => ({
    ...review,
    user: review ? users[review.userId].name : undefined
  })
);

export const averageRatingSelector = createSelector(
  reviewsSelector,
  idsSelector,
  (reviews, ids) => {
    if (!reviews) {
      return 0;
    }
    const ratings = ids.map(id => (reviews[id] ? reviews[id].rating : 0));
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
