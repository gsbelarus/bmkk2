import { Language, IGoodGroups } from './types';
import * as actions from './actions';
import { ActionType, getType } from 'typesafe-actions';

export type BMKKAction = ActionType<typeof actions>;

export type State = {
  selectedLang: Language;
  groups?: IGoodGroups;
};

const initialState: State = {
  selectedLang: 'RU'
};

export const  reducer = (state: State = initialState, action: BMKKAction): State => {
  switch (action.type) {
    case getType(actions.setLanguage):
      return {...state, selectedLang: action.payload};

    case getType(actions.loadGroups):
      return {...state, groups: action.payload};

    default:
      return state;
  }
};
