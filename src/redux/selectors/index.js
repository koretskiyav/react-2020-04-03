import { createSelector } from 'reselect';

export const selectRestaurants = state => state.restaurants;
export const selectOrder = state => state.order;
export const selectDishAmount = (state, id) => selectOrder(state)[id] || 0;

const selectAllDishes = createSelector(selectRestaurants, restaurants =>
  restaurants.flatMap(restaurant => restaurant.menu)
);

const selectOrderItemsAndCount = createSelector(
  selectOrder,
  selectAllDishes,
  (order, dishes) => {
    const nonZeroDishes = dishes.filter(
      dish => order[dish.id] && order[dish.id] > 0
    );
    return Object.keys(order).map(id => ({
      dish: nonZeroDishes.find(item => item.id === id),
      count: order[id]
    }));
  }
);

export const selectOrderItems = createSelector(
  selectOrderItemsAndCount,
  orderItems => orderItems.map(item => item.dish)
);

export const selectTotalPrice = createSelector(
  selectOrderItemsAndCount,
  items =>
    items.reduce((total, item) => total + item.dish.price * item.count, 0)
);
