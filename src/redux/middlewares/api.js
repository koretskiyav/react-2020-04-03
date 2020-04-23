import { SUCCESS, REQUEST, FAILURE } from '../constants';

export default store => next => async action => {
  const { CallAPI, type, ...rest } = action;
  if (!CallAPI) return next(action);

  console.warn('api middleware');

  next({ ...rest, type: type + REQUEST });

  try {
    const data = await fetch(CallAPI);
    const response = await data.json();
    console.warn('fetch result', response);

    next({ ...rest, type: type + SUCCESS, response });
  } catch (error) {
    next({ ...rest, type: type + FAILURE, error });
  }
};
