import { createSelector } from 'reselect';

export const restaurantsSelector = state => state.restaurants;
export const productsSelector = state => state.products;
export const orderSelector = state => state.order;

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

export const reviewsSelector = state => state.reviews;
export const usersSelector = state => state.users;

export const reviewSelector = id => {
  return createSelector(reviewsSelector, usersSelector, (reviews, users) => {
    const review = reviews[id];
    const user = users[review.userId];
    return {
      user: user.name,
      text: review.text,
      rating: review.rating
    };
  });
};
