import { createSelector } from 'reselect';

export const restaurantsSelector = state => state.restaurants;
export const productsSelector = state => state.products;
export const orderSelector = state => state.order;
export const reviewsSelector = state => state.reviews;

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

export const rawRatingSelector = selectedReviewsId =>
  createSelector(
    reviewsSelector,
    reviews =>
      selectedReviewsId
        .map(reviewId => reviews[reviewId].rating)
        .reduce((acc, rate) => acc + rate, 0) / selectedReviewsId.length
  );

export const normalizedRatingSelector = selectedReviewsId =>
  createSelector(
    rawRatingSelector(selectedReviewsId),
    rating => Math.floor(rating * 2) / 2
  );
