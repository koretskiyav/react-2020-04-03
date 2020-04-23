import {
  ADD_REVIEW,
  LOAD_COLLECTION,
  LOAD_COLLECTION_SCOPED,
  SUCCESS,
  REQUEST,
  FAILURE
} from '../constants';
import { arrToMap } from '../utils';

const defCollectionState = {
  loading: true,
  error: null,
  entities: {}
};

const defState = {
  restaurants: defCollectionState,
  reviews: defCollectionState,
  users: defCollectionState,
  dishes: defCollectionState
};

export default (state = defState, action) => {
  const { type, payload, collectionType, reviewId, response, error } = action;

  console.log('in collection reducer ', collectionType, type);

  const draft = state[collectionType];
  let changes;

  switch (type) {
    case LOAD_COLLECTION + REQUEST:
    case LOAD_COLLECTION_SCOPED + REQUEST:
      changes = { ...draft, loading: true, error: null };
      break;
    case LOAD_COLLECTION + SUCCESS:
      changes = { ...draft, loading: false, entities: arrToMap(response) };
      break;
    case LOAD_COLLECTION_SCOPED + SUCCESS:
      changes = {
        ...draft,
        loading: false,
        entities: { ...draft.entities, ...arrToMap(response) }
      };
      break;
    case LOAD_COLLECTION + FAILURE:
    case LOAD_COLLECTION_SCOPED + FAILURE:
      changes = { ...draft, loading: false, error };
      break;
    case ADD_REVIEW:
      state.restaurants.entities[payload.restaurantId].reviews.push(reviewId);
      break;
    default:
  }

  console.log('in collection reducer, result state=', changes);

  return { ...state, [collectionType]: changes };
};
