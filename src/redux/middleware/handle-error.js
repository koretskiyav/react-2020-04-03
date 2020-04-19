import { HANDLE_ERROR } from '../constants';

export default store => next => action => {
  switch (action.type) {
    case HANDLE_ERROR: {
      // TODO: здесь обработка ошибки
      console.error('ОШибка ', action.payload);
      next(action);
      return;
    }
    default:
      next(action);
  }
};
