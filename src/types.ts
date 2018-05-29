export type Language = 'RU' | 'BE' | 'EN';

export const languages: Language[] = ['RU', 'BE', 'EN'];

export interface TName {
  name: string;
  fullName?: string;
}

export interface LName {
  [key: string]: TName;
}

export interface MenuItem {
  path: string;
  caption: LName;
}

export type MenuItems = MenuItem[];

export interface GoodCapt {
  description: {
    consist: LName;
    casing: LName;
    beforuse: LName;
  }
}

export type GoodCaptions = GoodCapt;

export interface IGoodGroups {
  version: string;
  groups: {
    ruid: string;
    parent?: string;
    caption: LName;
    ordr: number;
    image?: string;
  }[];
}

export interface IGoods {
  version: string;
  goods: {
    ruid: string;
    group: string;
    caption: LName;
    valuename: LName;  
    consist: LName;       
    casing: LName; 
    image?: string;
    costnde: number;
    dcostfull: number;
    beforuse: LName;
  }[];
}