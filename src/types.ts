export type Language = 'ru' | 'by' | 'en';

export interface TName {
  name: string;
  fullName?: string;
};

export interface LName {
  ru?: TName;
  by?: TName;
  en?: TName;
};