import { INCREMENT, DECREMENT, RESET } from '../constants';

/*
{
  [dishId]: {
    dish: ...dish,
    count
  }
}
*/
export default (state = {}, action) => {
  const { type, payload } = action;
  const dishId = payload && payload.dish.id;
  const prevCount = state[dishId] ? state[dishId].count : 0;
  switch (type) {
    case INCREMENT:
      return {
        ...state,
        [dishId]: {
          dish: payload.dish,
          count: prevCount + 1
        }
      };
    case DECREMENT:
      return {
        ...state,
        [dishId]: {
          dish: payload.dish,
          count: prevCount - 1
        }
      };
    case RESET:
      return {
        ...state,
        [dishId]: {
          dish: payload.dish,
          count: 0
        }
      };
    default:
      return state;
  }
};
