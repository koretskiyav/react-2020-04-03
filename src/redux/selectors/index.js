import { createSelector } from 'reselect';
import { getAverage, getById, idsSelector, mapToList } from './utils';

const restaurantsSelector = state => state.restaurants.entities.toJS();
export const productsSelector = state => state.products.entities.toJS();
const orderSelector = state => state.order.toJS();
const reviewsSelector = state => state.reviews.entities;
const usersSelector = state => state.users.entities;

export const restaurantsLoadingSelector = state => state.restaurants.loading;
export const productsLoadingSelector = state => state.products.loading;
export const reviewsLoadingSelector = state => state.reviews.loading;
export const usersLoadingSelector = state => state.users.loading;

export const restaurantsListSelector = mapToList(restaurantsSelector);
export const productAmountSelector = getById(orderSelector);
export const productSelector = getById(productsSelector);
const reviewSelector = getById(reviewsSelector);

export const reviewWithUserSelector = createSelector(
  reviewSelector,
  usersSelector,
  (review, users) => {
    if (review) {
      return {
        ...review,
        user: users[review.userId]?.name
      };
    }
  }
);

export const averageRatingSelector = createSelector(
  reviewsSelector,
  idsSelector,
  (reviews, ids) => {
    const ratings = ids.map(id => (reviews[id] ? reviews[id].rating : null));
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
