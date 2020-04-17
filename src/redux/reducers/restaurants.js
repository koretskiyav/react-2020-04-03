import { restaurants } from '../../fixtures';

export default (restaurantsParam = restaurants, action) => {
  const { type } = action;

  switch (type) {
    default:
      return restaurantsParam;
  }
};
