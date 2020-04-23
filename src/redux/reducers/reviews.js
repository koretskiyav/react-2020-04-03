import { ADD_REVIEW, REQUEST, SUCCESS, FAILURE } from '../constants';
import { arrToMap } from '../utils';
import { LOAD_REVIEWS } from '../constants';

const initialState = {
  entities: {},
  loading: false,
  loaded: false,
  eror: null
};

export default (state = initialState, action) => {
  const { type, payload, reviewId, userId, response, error } = action;

  switch (type) {
    case LOAD_REVIEWS + REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case LOAD_REVIEWS + SUCCESS:
      return {
        ...state,
        loading: false,
        entities: { ...state.entities, ...arrToMap(response) }
      };
    case LOAD_REVIEWS + FAILURE:
      return {
        ...state,
        loading: false,
        error: error
      };
    case ADD_REVIEW:
      const { text, rating } = payload.review;
      return {
        ...state,
        entities: {
          ...state.entities,
          [reviewId]: { id: reviewId, userId, text, rating }
        }
      };
    default:
      return state;
  }
};
