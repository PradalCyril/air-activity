import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import user from '../reducers/userReducer';
import players from '../reducers/playersReducer';

const rootReducers = combineReducers({
  user,
  players
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