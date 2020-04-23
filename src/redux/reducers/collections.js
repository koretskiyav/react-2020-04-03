import {
  ADD_REVIEW,
  LOAD_COLLECTION,
  LOAD_COLLECTION_SCOPED,
  SUCCESS,
  REQUEST,
  FAILURE
} from '../constants';
import { arrToMap } from '../utils';
import { produce } from 'immer';

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

export default produce((state = defState, action) => {
  const {
    type,
    payload,
    collectionType,
    reviewId,
    userId,
    response,
    error
  } = action;

  switch (type) {
    case LOAD_COLLECTION + REQUEST:
    case LOAD_COLLECTION_SCOPED + REQUEST:
      state[collectionType].loading = true;
      state[collectionType].error = null;
      break;
    case LOAD_COLLECTION + SUCCESS:
      state[collectionType].loading = false;
      state[collectionType].entities = arrToMap(response);
      break;
    case LOAD_COLLECTION_SCOPED + SUCCESS:
      state[collectionType].loading = false;
      state[collectionType].entities = {
        ...state[collectionType].entities,
        ...arrToMap(response)
      };
      break;
    case LOAD_COLLECTION + FAILURE:
    case LOAD_COLLECTION_SCOPED + FAILURE:
      state[collectionType].loading = false;
      state[collectionType].error = error;
      break;

    // TODO: переделать на универсальный объект любого типа
    case ADD_REVIEW:
      const { user } = payload.review;
      state.restaurants.entities[payload.restaurantId].restaurants.push(
        reviewId
      );
      state.users.entities[userId] = { id: userId, name: user };
      break;
    default:
  }
  return state;
});
