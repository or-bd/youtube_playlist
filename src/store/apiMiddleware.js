import axios from 'axios';

const ApiMiddleware = store => next => (action) => {
  if (action.type.includes('API/')) {
    axios(action)
      .then(result => action.onSuccess(result.data))
      .catch(err => action.onFailure(err.response.data));
  }
  return next(action);
};

export default ApiMiddleware;
