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
  id: number,
  path: string;
  caption: LName;
}

export type MenuItems = MenuItem[];

export interface GoodCaptions {
  description: {
    ingredients: LName;
    casing: LName;
    beforuse: LName;
    costnde: LName;
    dcostfull: LName;
    proteins: LName;
    fats: LName;
    carbons: LName;
    energy: LName;
    vitamins: LName;
    B1: LName;
    B2: LName;
    C: LName;
    Ca: LName;
    Fe: LName;    
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
    fullname: string;
    valuename: LName; 
    grade: LName; 
    ingredients: LName;       
    casing: LName; 
    image: string;
    image2: string;    
    rate: number;
    term: string;
    beforuse: string;
    proteins: number;
    fats: number;
    carbons: number;
    enegry: number;
    B1: number;
    B2: number;
    C: number;
    Ca: number;
    Fe: number;
  }[];
}

export interface IPrice {
  version: string;
  date: string;  
  price: {
    ruid: string; 
    costnde: number;
    dcostfull: number; 
    barcode: string;
    issale: string;
    isnew: string;
  }[];
}

export interface INews {
  version: string;
  news: {
    ruid: string;
    title: LName;
    short: LName;
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
    description: string;
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
    image: string;
    lon: string;
    lat: string;
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

export interface IAddInfo {
  textRights: LName; 
  textPriceMore: LName;  
  textPriceLink: LName;  
  textOutlets: LName;  
  textPriceTop: LName;
  textPriceXlsTop: LName;
}
