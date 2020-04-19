import { ADD_REVIEW } from '../constants';
import { v4 as uuidv4 } from 'uuid';
import { addUser, handleError } from '../actions';

export default store => next => action => {
  switch (action.type) {
    case ADD_REVIEW: {
      const { name: user, ...review } = action.payload.object;

      const findUser = (users, name) =>
        Object.keys(users).find(key => users[key].name === name);

      let userId = findUser(store.getState().users, user);

      if (!userId) {
        store.dispatch(addUser({ name: user }));
      }

      // заново находим uid после добавления юзера
      userId = findUser(store.getState().users, user);

      if (!userId) {
        next(handleError(action, 'userNotFound'));
        return;
      }

      next({
        ...action,
        payload: { object: { ...review, userId, id: uuidv4() } }
      });
      return;
    }
    default:
      next(action);
  }
};
