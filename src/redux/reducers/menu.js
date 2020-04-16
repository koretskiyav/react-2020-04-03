import { restaurants } from '../../fixtures.js';

// в данном случае 0 , но в будущем можно на данные с сервера заменить
const menu = restaurants
  .map(restaurant => restaurant.menu)
  .flat()
  .map(dish => ({ ...dish, amount: 0 }));

export default function menuReducer(state = menu, action) {
  switch (action.type) {
    default:
      return state;
  }
}
