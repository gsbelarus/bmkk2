import { createStore, combineReducers } from 'redux';
import { reducer, State as AppState } from './reducer';

export type State = {
  appState: AppState;
};

const rootReducer = combineReducers<State>(
  {
    appState: reducer
  }
);

const store = createStore(rootReducer);

export default store;