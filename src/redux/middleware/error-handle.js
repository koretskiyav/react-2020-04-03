import { USER_NOT_FOUND } from '../constants';

export default store => next => action => {
  switch (action.type) {
    case USER_NOT_FOUND: {
      alert('Не удалось найти пользователя');
      next(action);
      return;
    }
    default:
      next(action);
  }
};
