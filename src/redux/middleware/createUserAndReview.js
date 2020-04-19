import { ADD_REVIEW } from '../constants';
import { v4 as uuid } from 'uuid';
import { addUser } from '../actions';

export default store => next => action => {
  if (action.type === ADD_REVIEW) {
    const { userName = 'Anonymous', review } = action.payload;

    const reviewId = uuid();
    let userId = Object.keys(store.getState().users).find(
      id => store.getState().users[id].name === userName
    );

    if (!userId) {
      userId = uuid();
      store.dispatch(addUser({ id: userId, name: userName }));
    }

    action.payload.review = { ...review, id: reviewId, userId };
  }

  next(action);
};
