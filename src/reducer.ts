import { Language, IGoodGroups, IGoods } from './types';
import * as actions from './actions';
import { ActionType, getType } from 'typesafe-actions';
import { lchmod } from 'fs';

export type BMKKAction = ActionType<typeof actions>; 

export type State = {
  selectedLang: Language;
  groups: IGoodGroups | undefined;
  selectedGroup: string; 
  goods: IGoods | undefined;
};

const initialState: State = {
  selectedLang: 'RU',
  groups: undefined,
  selectedGroup: '',
  goods: undefined
};

export const  reducer = (state: State = initialState, action: BMKKAction): State => {
  switch (action.type) {
    case getType(actions.setLanguage):
      return {...state, selectedLang: action.payload};

    case getType(actions.loadGroups):
      return {...state, groups: action.payload};

    case getType(actions.loadGoods):
      return {...state, goods: action.payload}  

    default:
      return state;
  }
};
