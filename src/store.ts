import { createStore, combineReducers } from 'redux';
import { reducer, State as AppState } from './reducer';

export type State = {
  reducer: AppState;
};

const rootReducer = combineReducers<State>(
  {
    reducer
  }
);

const store = createStore(rootReducer);

export default store;