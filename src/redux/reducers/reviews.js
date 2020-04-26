import { fromJS } from 'immutable';
import {
  ADD_REVIEW,
  LOAD_REVIEWS,
  REQUEST,
  SUCCESS,
  FAILURE
} from '../constants';
import { arrToMap } from '../utils';

const initialState = fromJS({
  loading: {},
  loaded: {},
  error: null,
  entities: {}
});

export default (state = initialState, action) => {
  const { type, payload, reviewId, userId, response, error } = action;

  switch (type) {
    case ADD_REVIEW:
      const { text, rating } = payload.review;

      return state.setIn(
        ['entities', reviewId],
        fromJS({ id: reviewId, userId, text, rating })
      );

    case LOAD_REVIEWS + REQUEST:
      return state.setIn(['loading', payload.restaurantId], true);

    case LOAD_REVIEWS + SUCCESS:
      return state
        .setIn(['loading', payload.restaurantId], false)
        .setIn(['loaded', payload.restaurantId], true)
        .set('error', null)
        .mergeIn(['entities'], arrToMap(response));

    case LOAD_REVIEWS + FAILURE:
      return state
        .setIn(['loading', payload.restaurantId], false)
        .setIn(['loaded', payload.restaurantId], false)
        .set('error', error);

    default:
      return state;
  }
};
