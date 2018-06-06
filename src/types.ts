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

export interface GoodCaptions {
  description: {
    composition: LName;
    casing: LName;
    beforuse: LName;
    costnde: LName;
    dcostfull: LName
  }
}

//export type GoodCaptions = GoodCapt;

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
  date: string;  
  goods: {
    ruid: string;
    group: string;
    caption: LName;
    valuename: LName; 
    category: LName; 
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

export interface IContacts {
  version: string;
  contacts: {
    ruid: string;
    department: string;
    caption: LName;
    phone: string;  
    email: string;       
    fax: string; 
  }[];
}

export interface IDepartments {
  version: string;
  departments: {
    ruid: string;
    caption: LName;
    ordr: number; 
  }[];
}

export interface ContactCaptions {
  description: {
    phone: LName;
    fax: LName;
    email: LName
  }
}

export interface IOutlets {
  version: string;
  outlets: {
    ruid: string;
    caption: LName;
    address: LName;  
    timewd: string;
    timesat: string;
    timesun: string;  
    phone: string;  
    email: string;       
    fax: string; 
  }[];
}

export interface OutletsCaptions {
  description: {
    caption: LName;
    phone: LName;     
    email: LName;
    time: LName;   
    timewd: LName;
    timesat: LName;
    timesun: LName;  
  }
}

