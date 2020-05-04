import {
  INCREMENT,
  DECREMENT,
  REMOVE,
  REQUEST,
  SUCCESS,
  FAILURE,
  SEND_ORDER
} from '../constants';

const initialState = {
  sending: false,
  sent: false,
  error: null,
  entities: {}
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case INCREMENT:
      return {
        ...state,
        entities: {
          ...state.entities,
          [payload.id]: (state.entities[payload.id] || 0) + 1
        }
      };
    case DECREMENT:
      return {
        ...state,
        entities: {
          ...state.entities,
          [payload.id]: Math.max((state.entities[payload.id] || 0) - 1, 0)
        }
      };
    case REMOVE:
      return {
        ...state,
        entities: {
          ...state.entities,
          [payload.id]: 0
        }
      };
    case SEND_ORDER + REQUEST:
      return {
        ...state,
        sending: true,
        sent: false,
        error: null
      };
    case SEND_ORDER + SUCCESS:
      return {
        ...state,
        entities: {},
        sending: false,
        sent: true,
        error: null
      };
    case SEND_ORDER + FAILURE:
      return {
        ...state,
        sent: false,
        sending: false,
        error: true
      };
    default:
      return state;
  }
};
