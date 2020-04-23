import { fromJS, Record, Map } from 'immutable';
import { LOAD_PRODUCTS, SUCCESS, REQUEST, FAILURE } from '../constants';
import { arrToMap } from '../utils';

const ProductsRecord = Record({
  entities: new Map(),
  loading: false,
  error: null
});

export default (state = new ProductsRecord(), action) => {
  const { type, response, error } = action;

  switch (type) {
    case LOAD_PRODUCTS + REQUEST:
      return state.set('loading', true).set('error', null);
    case LOAD_PRODUCTS + SUCCESS:
      return state
        .set('loading', false)
        .set(
          'entities',
          state.get('entities').merge(fromJS(arrToMap(response)))
        );
    case LOAD_PRODUCTS + FAILURE:
      return state.set('loading', false).set('error', error);
    default:
      return state;
  }
};
