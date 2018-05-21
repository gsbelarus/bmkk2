import { combineReducers } from 'redux';
import { Language } from './types';
import * as actions from './actions';
import { ActionType } from 'typesafe-actions';

export type BMKKAction = ActionType<typeof actions>;

export type State = {
  lang: Language;
};

const initialState: State = {
  lang: 'ru'
};

export const  reducer = (state: State = initialState, action: BMKKAction): State => {
  return state;
};
