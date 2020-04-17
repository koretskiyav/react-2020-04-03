import { createSelector } from 'reselect';
const getOrder = state => state.order;
const getMenu = state => state.menu;

const getUpdatedMenu = createSelector([getOrder, getMenu], (order, menu) =>
  menu.map(dish =>
    order[dish.id] ? { ...dish, amount: order[dish.id] } : dish
  )
);

export const getOrderedItems = createSelector(getUpdatedMenu, menu =>
  menu.filter(dish => dish.amount > 0)
);

export const showOrderedSum = createSelector(getOrderedItems, items =>
  items.reduce((sum, current) => sum + current.amount * current.price, 0)
);
