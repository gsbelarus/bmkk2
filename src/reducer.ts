import { Language, IGoodGroups, IGoods, IPrice, INews, IContacts, IDepartments, IOutlets, IcsvData } from './types';
import * as actions from './actions';
import { ActionType, getType } from 'typesafe-actions';
import { lchmod } from 'fs';

export type BMKKAction = ActionType<typeof actions>; 

export type State = {
  selectedLang: Language;
  groups: IGoodGroups | undefined;
  selectedGroup: string; 
  goods: IGoods | undefined;
  price: IPrice | undefined;  
  news: INews | undefined;  
  contacts: IContacts | undefined; 
  departments: IDepartments | undefined;   
  outlets: IOutlets | undefined; 
  csvData: IcsvData  | undefined;    
};

const initialState: State = {
  selectedLang: 'RU',
  groups: undefined,
  selectedGroup: '',
  goods: undefined,
  price: undefined,  
  news: undefined ,
  contacts: undefined,
  departments: undefined,
  outlets: undefined,
  csvData: undefined
};

export const  reducer = (state: State = initialState, action: BMKKAction): State => {
  switch (action.type) {
    case getType(actions.setLanguage):
      return {...state, selectedLang: action.payload};

    case getType(actions.loadGroups):
      return {...state, groups: action.payload};

    case getType(actions.loadGoods):
      return {...state, goods: action.payload}; 

    case getType(actions.loadPrice):
      return {...state, price: action.payload};       

    case getType(actions.loadNews):
      return {...state, news: action.payload}; 

    case getType(actions.loadContacts):
      return {...state, contacts: action.payload}; 

    case getType(actions.loadDepartments):
      return {...state, departments: action.payload};       

    case getType(actions.loadOutlets):
      return {...state, outlets: action.payload};        

      case getType(actions.loadcsvData):
      return {...state, csvData: action.payload}          

    default:
      return state;
  }
};
