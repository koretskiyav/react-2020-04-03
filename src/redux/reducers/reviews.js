import {
  ADD_REVIEW,
  LOAD_REVIEWS,
  REQUEST,
  SUCCESS,
  FAILURE,
  SELECT_NEW_RESTAURANT
} from '../constants';
import { arrToMap } from '../utils';
import produce from 'immer';

const initialState = {
  entities: {},
  loading: false,
  loaded: {},
  isError: false
};

export default produce((draft = initialState, action) => {
  const { type, payload, reviewId, userId, response, error } = action;

  switch (type) {
    case ADD_REVIEW:
      const { text, rating } = payload.review;
      draft.entities[reviewId] = { id: reviewId, userId, text, rating };
      break;
    case LOAD_REVIEWS + REQUEST:
      draft.loading = true;
      draft.isError = null;
      break;
    case LOAD_REVIEWS + SUCCESS:
      draft.loaded = {
        ...draft.loaded,
        [payload.restaurantId]: true
      };
      draft.loading = false;
      draft.entities = { ...draft.entities, ...arrToMap(response) };

      break;
    case LOAD_REVIEWS + FAILURE:
      draft.loading = false;
      draft.isError = error;
      break;

    default:
      return draft;
  }
});
