import produce from 'immer';
import {
  ADD_REVIEW,
  FAILURE,
  LOAD_USERS,
  REQUEST,
  SUCCESS
} from '../constants';
import { arrToMap } from '../utils';

const users = {
  entities: {},
  loading: false,
  error: null
};

export default produce((draft = users, action) => {
  const { type, payload, userId, response, error } = action;

  switch (type) {
    case LOAD_USERS + REQUEST:
      draft['error'] = null;
      draft['loading'] = true;
      break;
    case LOAD_USERS + SUCCESS:
      draft['entities'] = arrToMap(response);
      draft['loading'] = false;
      break;
    case LOAD_USERS + FAILURE:
      draft['error'] = error;
      draft['loading'] = false;
      break;
    case ADD_REVIEW:
      const { user } = payload.review;
      draft['entities'][userId] = { id: userId, name: user };
      break;
    default:
      return draft;
  }
});
