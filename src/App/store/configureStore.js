import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

export const configureStore = preloadedState => {
  const middlewares = [];
  const middlewaresEnhancer = applyMiddleware(...middlewares);

  const storeEnhancers = [middlewaresEnhancer];

  const composedEnhancer = composeWithDevTools(...storeEnhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancer);

  return store;
};
