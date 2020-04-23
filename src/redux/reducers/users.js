import {
  ADD_REVIEW,
  FAILURE,
  LOAD_USERS,
  REQUEST,
  SUCCESS
} from '../constants';

export default (state = {}, action) => {
  const { type, payload, userId, response, error } = action;

  switch (type) {
    case LOAD_USERS + REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case LOAD_USERS + SUCCESS:
      return {
        ...state,
        entities: response,
        loading: false,
        error: null
      };
    case LOAD_USERS + FAILURE:
      return {
        ...state,
        loading: false,
        error
      };
    case ADD_REVIEW:
      return {
        ...state,
        entities: {
          ...state.entities,
          [userId]: { id: userId, userId, name: payload.review.user }
        }
      };
    default:
      return state;
  }
};
