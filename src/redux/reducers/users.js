import produce from 'immer';
import { ADD_REVIEW } from '../constants';

export default produce((draft = {}, action) => {
  const { type, payload, userId } = action;

  switch (type) {
    case ADD_REVIEW:
      const { user } = payload.review;
      draft[userId] = { id: userId, name: user };
      break;

    default:
      return draft;
  }
});
