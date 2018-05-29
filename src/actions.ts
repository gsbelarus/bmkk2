import { createAction } from 'typesafe-actions';
import { Language, IGoodGroups, IGoods } from './types';

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