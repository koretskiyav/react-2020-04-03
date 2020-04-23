import { arrToMap } from '../utils';
import { lOAD_PRODUCTS, REQUEST, SUCCESS, FAILURE } from '../constants';
import { Map, Record, fromJS } from 'immutable';

const ProductRecord = Record({
  entities: new Map(),
  loading: false,
  loaded: false,
  isError: false
});

export default (state = ProductRecord(), action) => {
  const { type, response, error } = action;

  switch (type) {
    case lOAD_PRODUCTS + REQUEST:
      return state.set('loading', true).set('isError', null);
    case lOAD_PRODUCTS + SUCCESS:
      return state
        .set('loading', false)
        .set('loaded', true)
        .set('entities', fromJS(arrToMap(response)));
    case lOAD_PRODUCTS + FAILURE:
      return state.set('loading', false).set('isError', error);
    default:
      return state;
  }
};
