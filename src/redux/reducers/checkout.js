import { CHECKOUT, REQUEST, SUCCESS, FAILURE } from '../constants';

export default (state = { loading: false }, action) => {
  const { type } = action;

  switch (type) {
    case CHECKOUT + REQUEST:
      return {
        ...state,
        loading: true
      };
    case CHECKOUT + SUCCESS:
    case CHECKOUT + FAILURE:
      return {
        ...state,
        loading: false
      };

    default:
      return state;
  }
};
