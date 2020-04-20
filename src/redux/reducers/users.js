import { normalizedUsers } from '../../fixtures';

import { ADD_REVIEW } from '../constants';

const defaultUsers = normalizedUsers.reduce((acc, user) => {
  acc[user.id] = user;
  return acc;
}, {});

export default (users = defaultUsers, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_REVIEW:
      return {
        [payload.userId]: { id: payload.userId, name: payload.username },
        ...users
      };
    default:
      return users;
  }
};
