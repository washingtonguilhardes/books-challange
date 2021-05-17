import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { createLogger } from 'redux-logger';
import tunk from 'redux-thunk';

import reducer from './reducer';

const getMiddleware = () => {
  if (process.env.NODE_ENV === 'production') {
    return applyMiddleware(tunk);
  } else {
    // Enable additional logging in non-production environments.
    return applyMiddleware(tunk, createLogger());
  }
};

export const store: any = createStore(reducer, composeWithDevTools(getMiddleware()));
