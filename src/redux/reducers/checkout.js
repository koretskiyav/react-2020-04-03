import { LOAD_CHECKOUT, SUCCESS, FAILURE, REQUEST } from '../constants';

export default (state = {}, action) => {
  const { type, error } = action;
  switch (type) {
    case LOAD_CHECKOUT + REQUEST:
      return {
        ...state,
        loading: true
      };
    case LOAD_CHECKOUT + SUCCESS:
      return {
        ...state,
        loading: false
      };
    case LOAD_CHECKOUT + FAILURE:
      return {
        ...state,
        loading: false,
        error: error
      };
    default:
      return state;
  }
};
