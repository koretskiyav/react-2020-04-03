import { arrToMap } from '../utils';
import { LOAD_MENU, REQUEST, SUCCESS, FAILURE } from '../constants';

const initialState = {
  entities: {},
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  const { type, response, error } = action;

  switch (type) {
    case LOAD_MENU + REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case LOAD_MENU + SUCCESS:
      return {
        ...state,
        loading: false,
        entities: { ...state.entities, ...arrToMap(response) }
      };
    case LOAD_MENU + FAILURE:
      return {
        ...state,
        loading: false,
        error: error
      };
    default:
      return state;
  }
};
