import produce from 'immer';
import {
  ADD_REVIEW,
  LOAD_USERS,
  REQUEST,
  SUCCESS,
  FAILURE
} from '../constants';
import { arrToMap } from '../utils';

const initialState = {
  entities: {},
  loading: false,
  loaded: false,
  eror: null
};

export default produce((draft = initialState, action) => {
  const { type, payload, userId, response, error } = action;

  switch (type) {
    case LOAD_USERS + REQUEST:
      draft.loading = true;
      draft.error = null;
      break;
    case LOAD_USERS + SUCCESS:
      draft.entities = { ...draft.entities, ...arrToMap(response) };
      break;
    case LOAD_USERS + FAILURE:
      draft.loading = false;
      draft.error = error;
      break;
    case ADD_REVIEW:
      const { user } = payload.review;
      draft.entities[userId] = { id: userId, name: user };
      break;
    default:
      return draft;
  }
});
