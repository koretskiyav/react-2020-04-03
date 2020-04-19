import { normalizedUsers } from '../../fixtures';

const defaultUsers = normalizedUsers.reduce((acc, user) => {
  acc[user.id] = user.name;
  return acc;
}, {});

export default (users = defaultUsers, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ADD_USER':
      return {
        ...users,
        [payload.id]: payload.name
      };
    default:
      return users;
  }
};
