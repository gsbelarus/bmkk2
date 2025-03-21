import { createAction } from "typesafe-actions";
import {
  IContacts,
  IDepartments,
  IGoodGroups,
  IGoods,
  INews,
  IOutlets,
  IPrice,
  IVacancies,
  IcsvData,
  IxlsxData,
  Language,
} from "./types";

export const setLanguage = createAction("SET_LANGUAGE", (resolve) => {
  return (lang: Language) => resolve(lang);
});

export type SetLanguage = typeof setLanguage;

export const loadGroups = createAction("LOAD_GROUPS", (resolve) => {
  return (loadedGroups: IGoodGroups) => resolve(loadedGroups);
});

export type LoadGroups = typeof loadGroups;

export const loadGoods = createAction("LOAD_GOODS", (resolve) => {
  return (loadedGoods: IGoods) => resolve(loadedGoods);
});

export type LoadGoods = typeof loadGoods;

export const loadPrice = createAction("LOAD_PRICE", (resolve) => {
  return (loadedPrice: IPrice) => resolve(loadedPrice);
});

export type LoadPrice = typeof loadPrice;

export const loadNews = createAction("LOAD_NEWS", (resolve) => {
  return (loadedNews: INews) => resolve(loadedNews);
});

export type LoadNews = typeof loadNews;

export const loadContacts = createAction("LOAD_CONTACTS", (resolve) => {
  return (loadedContacts: IContacts) => resolve(loadedContacts);
});

export type LoadContacts = typeof loadContacts;

export const loadDepartments = createAction("LOAD_DEPARTMENTS", (resolve) => {
  return (loadedDepartments: IDepartments) => resolve(loadedDepartments);
});

export type LoadDepartments = typeof loadDepartments;

export const loadOutlets = createAction("LOAD_OUTLETS", (resolve) => {
  return (loadedOutlets: IOutlets) => resolve(loadedOutlets);
});

export type LoadOutlets = typeof loadOutlets;

export const loadVacancies = createAction("LOAD_VACANCIES", (resolve) => {
  return (loadedVacancies: IVacancies) => resolve(loadedVacancies);
});

export type LoadVacancies = typeof loadVacancies;

export const loadcsvData = createAction("LOAD_CSVDATA", (resolve) => {
  return (loadedcsvData: IcsvData) => resolve(loadedcsvData);
});

export type LoadcsvData = typeof loadcsvData;

export const loadxlsxData = createAction("LOAD_XLSXDATA", (resolve) => {
  return (loadedxlsxData: IxlsxData) => resolve(loadedxlsxData);
});

export type LoadxlsxData = typeof loadxlsxData;

export const loadOutletsMD = createAction("LOAD_OUTLETSMD", (resolve) => {
  return (loadedOutletsMD: { lang: string; text: string }) =>
    resolve(loadedOutletsMD);
});

export type LoadOutletsMD = typeof loadOutletsMD;

export const loadVacanciesMD = createAction("LOAD_VACANCIESMD", (resolve) => {
  return (loadedVacanciesMD: { lang: string; text: string }) =>
    resolve(loadedVacanciesMD);
});

export type LoadVacanciesMD = typeof loadVacanciesMD;

export const loadForForeignersMD = createAction(
  "LOAD_FORFOREIGNERSMD",
  (resolve) => {
    return (loadedForForeignersMD: { lang: string; text: string }) =>
      resolve(loadedForForeignersMD);
  }
);

export type LoadForForeignersMD = typeof loadForForeignersMD;

export const loadAboutMD = createAction("LOAD_ABOUTMD", (resolve) => {
  return (loadedAboutMD: { lang: string; text: string }) =>
    resolve(loadedAboutMD);
});

export type LoadAboutMD = typeof loadAboutMD;

export const loadHistoryMD = createAction("LOAD_HISTORYMD", (resolve) => {
  return (loadedHistoryMD: { lang: string; text: string }) =>
    resolve(loadedHistoryMD);
});

export type LoadHistoryMD = typeof loadHistoryMD;

export const loadAutomationMD = createAction("LOAD_AUTOMATIONMD", (resolve) => {
  return (loadedAutomationMD: { lang: string; text: string }) =>
    resolve(loadedAutomationMD);
});

export type LoadAutomationMD = typeof loadAutomationMD;

export const loadVacancyMD = createAction("LOAD_VACANCYMD", (resolve) => {
  return (loadedVacancyMD: { lang: string; text: string }) =>
    resolve(loadedVacancyMD);
});

export type LoadVacancyMD = typeof loadVacancyMD;

export const loadRestMD = createAction("LOAD_RESTMD", (resolve) => {
  return (loadedRestMD: { lang: string; text: string }) =>
    resolve(loadedRestMD);
});

export type LoadRestMD = typeof loadRestMD;

export const loadRestMD2 = createAction("LOAD_RESTMD2", (resolve) => {
  return (loadedRestMD2: { lang: string; text: string }) =>
    resolve(loadedRestMD2);
});

export type LoadRestMD2 = typeof loadRestMD2;

export const loadStaffMD = createAction("LOAD_STAFFMD", (resolve) => {
  return (loadedStaffMD: { lang: string; text: string }) =>
    resolve(loadedStaffMD);
});

export type LoadStaffMD = typeof loadStaffMD;

export const loadDirectionMD = createAction("LOAD_DIRECTIONMD", (resolve) => {
  return (loadedDirectionMD: { lang: string; text: string }) =>
    resolve(loadedDirectionMD);
});

export type LoadDirectionMD = typeof loadDirectionMD;

export const loadRequisitesMD = createAction("LOAD_REQUISITESMD", (resolve) => {
  return (loadedRequisitesMD: { lang: string; text: string }) =>
    resolve(loadedRequisitesMD);
});

export type LoadRequisitesMD = typeof loadRequisitesMD;

export const loadFeedbackMD = createAction("LOAD_FEEDBACKMD", (resolve) => {
  return (loadedFeedbackMD: { lang: string; text: string }) =>
    resolve(loadedFeedbackMD);
});

export type LoadFeedbackMD = typeof loadFeedbackMD;

export const loadForCustomerMD = createAction(
  "LOAD_FORCUSTOMERMD",
  (resolve) => {
    return (loadedForCustomerMD: { lang: string; text: string }) =>
      resolve(loadedForCustomerMD);
  }
);

export type LoadForCustomerMD = typeof loadForCustomerMD;

export const loadPriceTitleMD = createAction("LOAD_PRICETITLEMD", (resolve) => {
  return (loadedPriceTitleMD: { lang: string; text: string }) =>
    resolve(loadedPriceTitleMD);
});

export type LoadPriceTitleMD = typeof loadPriceTitleMD;

export const loadDownLoadMD = createAction("LOAD_DOWNLOADMD", (resolve) => {
  return (loadedDownLoadMD: { lang: string; text: string }) =>
    resolve(loadedDownLoadMD);
});

export type LoadDownLoadMD = typeof loadDownLoadMD;
