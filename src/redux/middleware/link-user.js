import { ADD_REVIEW } from '../constants';
import { v4 as uuidv4 } from 'uuid';
import { addUser, userNotFound } from '../actions';

export default store => next => action => {
  switch (action.type) {
    case ADD_REVIEW: {
      const { name: user, ...review } = action.payload.review;

      const users = store.getState().users;

      let userId = Object.keys(users).find(key => users[key].name === user);

      // Так и не получилось здесь сделать добавление пользоателя
      // если вызывать next- не срабатывает миддлваре добавляющая id
      // пользователю, если делать диспатч - то он вызывается все-таки
      // асинхронно и пользователь добавляется после того как я делаю
      // второй поиск по uid.
      //
      // if (!userId) {
      //   // store.dispatch(addUser({name: user}));
      //    next(addUser({name: user}));
      // }

      //
      // // заново находим uid после добавления юзера
      // userId = Object.keys(users)
      //   .find(key => users[key].name === user);

      if (!userId) {
        next(userNotFound());
        return;
      }
      next({
        ...action,
        payload: { review: { ...review, userId, id: uuidv4() } }
      });
      return;
    }
    default:
      next(action);
  }
};
