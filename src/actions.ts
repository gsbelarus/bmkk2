import { createAction } from 'typesafe-actions';
import { Language, IGoodGroups, IGoods, IPrice, INews, IContacts, IDepartments, IOutlets, IcsvData } from './types';

export const setLanguage = createAction('SET_LANGUAGE', resolve => {
  return (lang: Language) => resolve(lang);
});

export type SetLanguage = typeof setLanguage;

export const loadGroups = createAction('LOAD_GROUPS', resolve => {
  return (loadedGroups: IGoodGroups) => resolve(loadedGroups);
});

export type LoadGroups = typeof loadGroups;

export const loadGoods = createAction('LOAD_GOODS', resolve => {
  return (loadedGoods: IGoods) => resolve(loadedGoods);
});

export type LoadGoods = typeof loadGoods;

export const loadPrice = createAction('LOAD_PRICE', resolve => {
  return (loadedPrice: IPrice) => resolve(loadedPrice);
});

export type LoadPrice = typeof loadPrice;

export const loadNews = createAction('LOAD_NEWS', resolve => {
  return (loadedNews: INews) => resolve(loadedNews);
});

export type LoadNews = typeof loadNews;

export const loadContacts = createAction('LOAD_CONTACTS', resolve => {
  return (loadedContacts: IContacts) => resolve(loadedContacts);
});

export type LoadContacts = typeof loadContacts;

export const loadDepartments = createAction('LOAD_DEPARTMENTS', resolve => {
  return (loadedDepartments: IDepartments) => resolve(loadedDepartments);
});

export type LoadDepartments = typeof loadDepartments;

export const loadOutlets = createAction('LOAD_OUTLETS', resolve => {
  return (loadedOutlets: IOutlets) => resolve(loadedOutlets);
});

export type LoadOutlets = typeof loadOutlets;

export const loadcsvData = createAction('LOAD_CSVDATA', resolve => {
  return (loadedcsvData: IcsvData) => resolve(loadedcsvData);
});

export type LoadcsvData = typeof loadcsvData;