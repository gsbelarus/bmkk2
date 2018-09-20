import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { reducer, State as AppState } from './reducer';

export type State = {
  appState: AppState;
};

const rootReducer = combineReducers<State>(
  {
    appState: reducer
  }
);
const devCompose =
  typeof window === 'object' && (<any>window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (<any>window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;


  const store = createStore(rootReducer, {}, devCompose(applyMiddleware()));

export default store;