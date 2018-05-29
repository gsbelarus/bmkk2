import { MenuItems, GoodCaptions } from './types';

export const dataRoot = '/data/';
export const aboutRoot = `${dataRoot}about/`;
export const goodGroupsRoot = `${dataRoot}goodgroup/`;
export const goodGroupsFile = `${goodGroupsRoot}goodgroup.json`;
export const goodsRoot = `${dataRoot}goods/`;
export const goodsFile = `${goodsRoot}goods.json`;

export const mainMenu: MenuItems = [
  {
    path: '',
    caption: {
      ru: {
        name: 'Главная'
      },
      be: {
        name: 'Галоўная'
      },
      en: {
        name: 'Home'
      }
    }
  },
  {
    path: 'about',
    caption: {
      ru: {
        name: 'О нас'
      },
      be: {
        name: 'Пра нас'
      },
      en: {
        name: 'About'
      }
    }
  },
  {
    path: 'production',
    caption: {
      ru: {
        name: 'Продукция'
      },
      be: {
        name: 'Прадукцыя'
      },
      en: {
        name: 'Products'
      }
    }
  },
  {
    path: 'partners',
    caption: {
      ru: {
        name: 'Клиентам'
      },
      be: {
        name: 'Кліентам'
      },
      en: {
        name: 'Partners'
      }
    }
  },
  {
    path: 'outlets',
    caption: {
      ru: {
        name: 'Фирменная торговля'
      },
      be: {
        name: 'Фірмовы гандаль'
      },
      en: {
        name: 'Outlets'
      }
    }
  },
  {
    path: 'contacts',
    caption: {
      ru: {
        name: 'Контакты'
      },
      be: {
        name: 'Кантакты'
      },
      en: {
        name: 'Contacts'
      }
    }
  }
];

export const GoodCaption: GoodCaptions = 
  {
    description: {
      consist: {
        ru: {
          name: 'Состав'
        },
        be: {
          name: 'Склад'
        },
        en: {
          name: 'Consist'
        }
      },
      casing: {
        ru: {
          name: 'Оболочка'
        },
        be: {
          name: 'Абалонка'
        },
        en: {
          name: 'Casing'
        }
      },
      beforuse: {
        ru: {
          name: 'Срок реализации'
        },
        be: {
          name: 'Тэрмін рэалізацыі'
        },
        en: {
          name: 'Sell by'
        }
      }
    }
  }     
 