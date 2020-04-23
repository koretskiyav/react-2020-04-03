import produce from 'immer';
import {
  ADD_REVIEW,
  LOAD_USERS,
  REQUEST,
  SUCCESS,
  FAILURE
} from '../constants';
import { arrToMap } from '../utils';

const InitialUsers = {
  entities: {},
  loading: false,
  loaded: false,
  isError: false
};

export default produce((draft = InitialUsers, action) => {
  const { type, payload, userId, response, error } = action;

  switch (type) {
    case LOAD_USERS + REQUEST:
      draft.loading = true;
      draft.isError = null;
      break;
    case LOAD_USERS + SUCCESS:
      draft.loading = false;
      draft.entities = {
        ...draft.entities,
        ...arrToMap(response)
      };
      break;
    case LOAD_USERS + FAILURE:
      draft.loading = false;
      draft.isError = error;
      break;
    case ADD_REVIEW:
      const { user } = payload.review;
      draft.entities[userId] = { id: userId, name: user };
      break;

    default:
      return draft;
  }
});
