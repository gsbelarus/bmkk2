import { Language, IGoodGroups, IGoods, IPrice, INews, IContacts, IDepartments, IOutlets, IcsvData, LName } from './types';
import * as actions from './actions';
import { ActionType, getType } from 'typesafe-actions';

export type BMKKAction = ActionType<typeof actions>; 

export type State = {
  selectedLang: Language;
  groups?: IGoodGroups;
  selectedGroup: string; 
  goods?: IGoods;
  price?: IPrice;  
  news?: INews;  
  contacts?: IContacts; 
  departments?: IDepartments;   
  outlets?: IOutlets; 
  csvData?: IcsvData; 
  outletsMD?: LName; 
  forForeignersMD? :LName; 
  aboutMD? :LName; 
  historyMD?: LName;
  staffMD?: LName;
  vacancyMD?: LName;
  restMD?: LName;     
  directionMD? : LName;
  requisitesMD? :LName;
  forCustomerMD? :LName;
  priceTitleMD? :LName;
  downLoadMD? :LName;
};

const initialState: State = {
  selectedLang: 'RU',
  selectedGroup: ''
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
      return {...state, csvData: action.payload};

    case getType(actions.loadOutletsMD):
      var { lang, text } = action.payload;
      const { outletsMD } = state;
      
      return {...state, outletsMD: {...outletsMD, [lang]: {name: text} } };

    case getType(actions.loadForForeignersMD):
      var { lang, text } = action.payload;
      const { forForeignersMD } = state;      
      return {...state, forForeignersMD: {...forForeignersMD, [lang]: {name: text} } }  

    case getType(actions.loadAboutMD):
      var { lang, text } = action.payload;
      const { aboutMD } = state;      
      return {...state, aboutMD: {...aboutMD, [lang]: {name: text} } }    
      
    case getType(actions.loadHistoryMD):
      var { lang, text } = action.payload;
      const { historyMD } = state;      
      return {...state, historyMD: {...historyMD, [lang]: {name: text} } }    
      
    case getType(actions.loadStaffMD):
      var { lang, text } = action.payload;
      const { staffMD } = state;      
      return {...state, staffMD: {...staffMD, [lang]: {name: text} } }            

    case getType(actions.loadVacancyMD):
      var { lang, text } = action.payload;
      const { vacancyMD } = state;      
      return {...state, vacancyMD: {...vacancyMD, [lang]: {name: text} } }   
      
    case getType(actions.loadRestMD):
      var { lang, text } = action.payload;
      const { restMD } = state;      
      return {...state, restMD: {...restMD, [lang]: {name: text} } }       
      
    case getType(actions.loadDirectionMD):
      var { lang, text } = action.payload;
      const { directionMD } = state;      
      return {...state, directionMD: {...directionMD, [lang]: {name: text} } }   
      
    case getType(actions.loadRequisitesMD):
      var { lang, text } = action.payload;
      const { requisitesMD } = state;      
      return {...state, requisitesMD: {...requisitesMD, [lang]: {name: text} } }    
      
    case getType(actions.loadForCustomerMD):
      var { lang, text } = action.payload;
      const { forCustomerMD } = state;      
      return {...state, forCustomerMD: {...forCustomerMD, [lang]: {name: text} } }    
      
    case getType(actions.loadPriceTitleMD):
      var { lang, text } = action.payload;
      const { priceTitleMD } = state;      
      return {...state, priceTitleMD: {...priceTitleMD, [lang]: {name: text} } } 
      
    case getType(actions.loadDownLoadMD):
      var { lang, text } = action.payload;
      const { downLoadMD } = state;      
      return {...state, downLoadMD: {...downLoadMD, [lang]: {name: text} } }         

    default:
      return state;
  }
};
