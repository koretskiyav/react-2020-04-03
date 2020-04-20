import { normalizedUsers } from '../../fixtures';
import { ADD } from '../constants';

const defaultUsers = normalizedUsers.reduce((acc, user) => {
  acc[user.id] = user;
  return acc;
}, {});

export default (users = defaultUsers, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD:
      return {
        ...users,
        [payload.userId]: { id: payload.userId, name: payload.name }
      };
    default:
      return users;
  }
};
