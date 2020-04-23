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
  const {
    type,
    payload,
    collectionType,
    reviewId,
    userId,
    response,
    error
  } = action;

  let collection = state[collectionType];
  let changes;

  switch (type) {
    case LOAD_COLLECTION + REQUEST:
    case LOAD_COLLECTION_SCOPED + REQUEST:
      changes = { ...collection, loading: true, error: null };
      return { ...state, [collectionType]: changes };
    case LOAD_COLLECTION + SUCCESS:
      changes = { ...collection, loading: false, entities: arrToMap(response) };
      return { ...state, [collectionType]: changes };
    case LOAD_COLLECTION_SCOPED + SUCCESS:
      changes = {
        ...collection,
        loading: false,
        entities: { ...collection.entities, ...arrToMap(response) }
      };
      return { ...state, [collectionType]: changes };
    case LOAD_COLLECTION + FAILURE:
    case LOAD_COLLECTION_SCOPED + FAILURE:
      changes = { ...collection, loading: false, error };
      return { ...state, [collectionType]: changes };

    // TODO: переделать на универсальный объект любого типа
    case ADD_REVIEW:
      collection = state.restaurants;
      const oldRestaurant = collection.entities[payload.restaurantId];
      const oldReviews = oldRestaurant.reviews;
      changes = {
        ...collection,
        entities: {
          ...collection.entities,
          [payload.restaurantId]: {
            ...oldRestaurant,
            reviews: [...oldReviews, reviewId]
          }
        }
      };

      const oldUserCollection = state.users;
      const { user } = payload.review;
      const changedUserCollection = {
        ...oldUserCollection,
        entities: {
          ...oldUserCollection.entities,
          [userId]: { id: userId, name: user }
        }
      };

      return { ...state, restaurants: changes, users: changedUserCollection };
    default:
      return state;
  }
};
