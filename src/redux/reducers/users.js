import { normalizedUsers } from '../../fixtures';
import { normalize, schema } from 'normalizr';
import { ADD_REVIEW } from '../constants';

const users = new schema.Entity('users');
const defaultUsers = normalize(normalizedUsers, [users]);

export default (users = defaultUsers.entities.users, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_REVIEW:
      return {
        ...users,
        [payload.userId]: {
          name: payload.name,
          id: payload.userId
        }
      };
    default:
      return users;
  }
};
