import { normalizedRestaurants as defaultRestaurants } from '../../fixtures';

// По идеи в качестве объектов надо сделать и массива айдишек
export default (currentRestaurant = defaultRestaurants[0].id, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'selectRestaurant':
      return payload.id;
    default:
      return currentRestaurant;
  }
};
