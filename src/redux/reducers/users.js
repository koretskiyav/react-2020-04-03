import { normalizedUsers } from '../../fixtures';
import { ADD_USER } from '../constants';

import { normalize } from './utils';

const defValue = normalize(normalizedUsers);

export default (users = defValue, action) => {
  const { type } = action;

  switch (type) {
    case ADD_USER: {
      const user = action.payload.object;
      return { ...users, [user.id]: user };
    }
    default:
      return users;
  }
};
