import {
  INCREMENT,
  DECREMENT,
  REMOVE,
  SEND_ORDER,
  REQUEST,
  SUCCESS,
  FAILURE
} from '../constants';
import produce from 'immer';

const initialState = {
  loading: false,
  loaded: false,
  error: null,
  entities: {}
};

// { [productId]: amount }
export default produce((draft = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case INCREMENT:
      draft.entities[payload.id] = (draft.entities[payload.id] || 0) + 1;
      break;
    case DECREMENT:
      draft.entities[payload.id] = Math.max(
        (draft.entities[payload.id] || 0) - 1,
        0
      );
      break;
    case REMOVE:
      draft.entities[payload.id] = 0;
      break;
    case SEND_ORDER + REQUEST:
      draft['loading'] = true;
      draft['loaded'] = false;
      break;

    case SEND_ORDER + SUCCESS:
      draft.loading = false;
      draft.loaded = true;
      draft.error = null;
      break;
    case SEND_ORDER + FAILURE:
      draft.loading = false;
      draft.loaded = false;
      draft.error = action.error;
      break;
    default:
      return draft;
  }
});
