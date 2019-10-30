import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import user from '../reducers/userReducer';

const rootReducers = combineReducers({
  user
})
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(),
  // other store enhancers if any
);
export const store = createStore(rootReducers, enhancer);