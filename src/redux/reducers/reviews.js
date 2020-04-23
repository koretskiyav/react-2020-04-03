import produce from 'immer';
import {
  ADD_REVIEW,
  FAILURE,
  LOAD_REVIEWS,
  REQUEST,
  SUCCESS
} from '../constants';

const reviews = {
  entities: {},
  loading: false,
  error: null
};

export default produce((draft = reviews, action) => {
  const { type, payload, reviewId, userId, response, error } = action;

  switch (type) {
    case LOAD_REVIEWS + REQUEST:
      draft['error'] = null;
      draft['loading'] = true;
      break;
    case LOAD_REVIEWS + SUCCESS:
      response.forEach(item => (draft.entities[item.id] = item));
      draft['loading'] = false;
      break;
    case LOAD_REVIEWS + FAILURE:
      draft['error'] = error;
      draft['loading'] = false;
      break;
    case ADD_REVIEW:
      const { text, rating } = payload.review;
      draft['entities'][reviewId] = { id: reviewId, userId, text, rating };
      break;
    default:
      return draft;
  }
});
