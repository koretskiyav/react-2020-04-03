import { createSelector } from 'reselect';
import { getAverage, getById, idsSelector, mapToList } from './utils';

const restaurantsSelector = state => state.restaurants.entities.toJS();
const productsSelector = state => state.products.entities;
const orderSelector = state => state.order.entities;
const reviewsSelector = state => state.reviews.get('entities').toJS();
const usersSelector = state => state.users.entities;

export const restaurantsLoadingSelector = state => state.restaurants.loading;
export const restaurantsLoadedSelector = state => state.restaurants.loaded;

export const productsLoadingSelector = (state, props) =>
  state.products.loading[props.restaurantId];
export const productsLoadedSelector = (state, props) =>
  state.products.loaded[props.restaurantId];

export const reviewsLoadingSelector = (state, props) =>
  state.reviews.getIn(['loading', props.restaurantId]);
export const reviewsLoadedSelector = (state, props) =>
  state.reviews.getIn(['loaded', props.restaurantId]);

export const usersLoadingSelector = state => state.users.loading;
export const usersLoadedSelector = state => state.users.loaded;

export const orderSendingSelector = state => state.order.sending;
export const orderSentSelector = state => state.order.sent;
export const orderSentError = state => state.order.error;

export const restaurantsListSelector = mapToList(restaurantsSelector);
export const productAmountSelector = getById(orderSelector);
export const productSelector = getById(productsSelector);
const reviewSelector = getById(reviewsSelector);

export const reviewWitUserSelector = createSelector(
  reviewSelector,
  usersSelector,
  (review, users) =>
    review && {
      ...review,
      user: users[review.userId]?.name
    }
);

export const averageRatingSelector = createSelector(
  reviewsSelector,
  idsSelector,
  (reviews, ids) => {
    const ratings = ids.map(id => reviews[id]?.rating || 0);
    return Math.floor(getAverage(ratings) * 2) / 2;
  }
);

export const orderProductsSelector = createSelector(
  restaurantsListSelector,
  productsSelector,
  orderSelector,
  (restaurants, products, order) => {
    return Object.keys(order)
      .filter(productId => order[productId] > 0)
      .map(productId => products[productId])
      .map(product => ({
        product,
        amount: order[product.id],
        subtotal: order[product.id] * product.price,
        restaurantId: restaurants.find(restaurant =>
          restaurant.menu.includes(product.id)
        ).id
      }));
  }
);

export const totalSelector = createSelector(
  orderProductsSelector,
  orderProducts =>
    orderProducts.reduce((acc, { subtotal }) => acc + subtotal, 0)
);
