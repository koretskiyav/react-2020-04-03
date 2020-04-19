import { normalizedUsers } from '../../fixtures';
import { ADD_USER } from '../constants';

const defValue = normalizedUsers.reduce((acc, item) => {
  acc[item.id] = item;
  return acc;
}, {});

export default (users = defValue, action) => {
  const { type } = action;

  switch (type) {
    case ADD_USER: {
      console.log('add user', action);
      const user = action.payload.user;
      return { ...users, [user.id]: user };
    }
    default:
      return users;
  }
};
