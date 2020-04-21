import { createSelector } from 'reselect';
import React from 'react';
import Restaurant from '../../components/restaurant';

export const restaurantsSelector = state => state.restaurants;
export const productsSelector = state => state.products;
export const orderSelector = state => state.order;
export const reviewsSelector = state => state.reviews;
export const ownReviewsSelector = (state, props) => props.reviews;
export const usersSelector = state => state.users;

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

export const averageRatingSelector = createSelector(
  reviewsSelector,
  ownReviewsSelector,
  (stateReviews, ownReviews) =>
    ownReviews.reduce(
      (acc, reviewId) => acc + stateReviews[reviewId].rating,
      0
    ) / ownReviews.length
);

export const restaurantItemsSelector = createSelector(
  restaurantsSelector,
  restaurants =>
    Object.keys(restaurants).map(restaurantId => ({
      tabTitle: restaurants[restaurantId].name,
      tabContent: <Restaurant id={restaurantId} />
    }))
);
