import { fromJS, Record, Map } from 'immutable';
import {
  ADD_REVIEW,
  LOAD_RESTAURANTS,
  SUCCESS,
  REQUEST,
  FAILURE
} from '../constants';
import { arrToMap } from '../utils';

const RestaurantsRecord = Record({
  entities: new Map(),
  loading: false,
  loaded: false,
  error: null
});

export default (state = new RestaurantsRecord(), action) => {
  const { type, payload, reviewId, response, error } = action;

  switch (type) {
    case LOAD_RESTAURANTS + REQUEST:
      return state.set('loading', true).set('error', null);
    case LOAD_RESTAURANTS + SUCCESS:
      return state
        .set('loading', false)
        .set('entities', fromJS(arrToMap(response)));
    case LOAD_RESTAURANTS + FAILURE:
      return state.set('loading', false).set('error', error);
    case ADD_REVIEW:
      return state.updateIn(
        ['entities', payload.restaurantId, 'reviews'],
        reviews => reviews.push(reviewId)
      );
    default:
      return state;
  }
};
