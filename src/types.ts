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
    composition: LName;
    casing: LName;
    beforuse: LName;
    costnde: LName;
    dcostfull: LName
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
    image: string;
  }[];
}

export interface PriceItem {
  caption: LName;
}

export type PriceItems = PriceItem[];

export interface IGoods {
  version: string;
  goods: {
    ruid: string;
    group: string;
    caption: LName;
    valuename: LName;  
    composition: LName;       
    casing: LName; 
    image: string;
    image2: string;    
    costnde: number;
    dcostfull: number;
    rate: number;
    barcode: string;
    issale: boolean;
    isnew: boolean;
    term: string;
    beforuse: string;
  }[];
}

export interface INews {
  version: string;
  news: {
    ruid: string;
    title: LName;
    body: LName;
    date: Date;  
    expireson: Date;       
    pinned: Boolean; 
    ordr: number;    
    image: string;
  }[];
}


