import { v4 } from 'uuid';

import { ADD_REVIEW } from '../constants';

export default store => next => action => {
  const enhancedAction = Object.assign({}, action);
  if (action.type === ADD_REVIEW) {
    enhancedAction.payload.review['userId'] = v4();
    enhancedAction.payload.review['id'] = v4();
  }
  next(enhancedAction);
};
