import { ORDER, REQUEST, FAILURE, SUCCESS } from '../constants';

// { [productId]: amount }
export default (state = { isPending: false }, action) => {
  const { type, payload } = action;
  switch (type) {
    case ORDER + REQUEST:
      return {
        ...state,
        isPending: true
      };
    case ORDER + FAILURE:
    case ORDER + SUCCESS:
      return {
        ...state,
        isPending: false
      };
    default:
      return state;
  }
};
