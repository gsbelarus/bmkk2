import { MenuItems, GoodCaptions, PriceItems } from './types';

export const dataRoot = '/data/';
export const aboutRoot = `${dataRoot}about/`;
export const goodGroupsRoot = `${dataRoot}goodgroup/`;
export const goodGroupsFile = `${goodGroupsRoot}goodgroup.json`;
export const goodsRoot = `${dataRoot}goods/`;
export const goodsRoot2 = `${dataRoot}goods2/`;
export const newsRoot = `${dataRoot}news/`;
export const goodsFile = `${goodsRoot}goods.json`;
export const goodFileNoImage = 'noimage.jpg';
export const newsFile = `${newsRoot}news.json`;

export const mainMenu: MenuItems = [
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
    path: 'news',
    caption: {
      ru: {
        name: 'Новости'
      },
      be: {
        name: 'Навины'
      },
      en: {
        name: 'News'
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


export const goodCaption: GoodCaptions = 
  {
    description: {
      composition: {
        ru: {
          name: 'Состав:'
        },
        be: {
          name: 'Склад:'
        },
        en: {
          name: 'Composition:'
        }
      },
      casing: {
        ru: {
          name: 'Оболочка:'
        },
        be: {
          name: 'Абалонка:'
        },
        en: {
          name: 'Casing:'
        }
      },
      beforuse: {
        ru: {
          name: 'Срок реализации:'
        },
        be: {
          name: 'Тэрмін рэалізацыі:'
        },
        en: {
          name: 'Sell by:'
        }
      },  
      costnde: {
        ru: {
          name: 'Цена ФСО:'
        },
        be: {
          name: 'Цана ФСО:'
        },
        en: {
          name: 'Price ФСО:'
        }
      },  
      dcostfull: {
        ru: {
          name: 'Цена ФСН:'
        },
        be: {
          name: 'Цана ФСН:'
        },
        en: {
          name: 'Price ФСН:'
        }
      }      
    }
  }
;

export const priceCaption: PriceItems = [
  {
    caption: {
      ru: {
        name: '№'
      },
      be: {
        name: '№'
      },
      en: {
        name: '№'
      }
    }
  },  
  {
    caption: {
      ru: {
        name: 'Наименование'
      },
      be: {
        name: 'Найменне'
      },
      en: {
        name: 'Name'
      }
    }
  },
  {
    caption: {
      ru: {
        name: 'Ед. изм.'
      },
      be: {
        name: 'Адзінка вымярэння'
      },
      en: {
        name: 'Ед. изм.'
      }
    }
  },
  {
    caption: {
      ru: {
        name: 'Цена ФСО/ФСН, BYR'
      },
      be: {
        name: 'Цена ФСО/ФСН, BYR'
      },
      en: {
        name: 'Цена ФСО/ФСН, BYR'
      }
    }
  },
  {
    caption: {
      ru: {
        name: 'Ставка НДС, %'
      },
      be: {
        name: 'Ставка НДС, %'
      },
      en: {
        name: 'Ставка НДС, %'
      }
    }
  },
  {
    caption: {
      ru: {
        name: 'Срок хранения'
      },
      be: {
        name: 'Срок хранения'
      },
      en: {
        name: 'Срок хранения'
      }
    }
  },
  {
    caption: {
      ru: {
        name: 'Терм. состояние'
      },
      be: {
        name: 'Терм. состояние'
      },
      en: {
        name: 'Терм. состояние'
      }
    }
  },
  {
    caption: {
      ru: {
        name: 'Описание'
      },
      be: {
        name: 'Описание'
      },
      en: {
        name: 'Описание'
      }
    }
  }
];
