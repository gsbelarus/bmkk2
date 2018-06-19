import { MenuItems, GoodCaptions, PriceItems, ContactCaptions, OutletsCaptions, PriceItem } from './types';

/**
 * при работе локально путь /data/
 *
 * при компиляции для сайта путь должен быть /bmkk/new/data/
export const DATA_ROOT = '/data/';
 */
export const aboutRoot = `${DATA_ROOT}about/`;
export const goodGroupsRoot = `${DATA_ROOT}goodgroups/`;
export const goodGroupsFile = `${goodGroupsRoot}goodgroups.json`;
export const goodsRoot = `${DATA_ROOT}goods/`;
export const newsRoot = `${DATA_ROOT}news/`;
export const goodsFile = `${goodsRoot}goods.json`;
export const goodFileNoImage = 'noimage.png';
export const goodFileNoImage2 = 'noimage_big.png';
export const groupFileNoImage = 'noimage.png';
export const newsFile = `${newsRoot}news.json`;
export const contactsRoot = `${DATA_ROOT}contacts/`;
export const contactsFile = `${contactsRoot}contacts.json`;
export const departmentsFile = `${contactsRoot}departments.json`;
export const outletsRoot = `${DATA_ROOT}outlets/`;
export const outletsFile = `${contactsRoot}outlets.json`;

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
    path: 'news',
    caption: {
      ru: {
        name: 'Новости'
      },
      be: {
        name: 'Навіны'
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
    path: 'forcustomer',
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
      ingredients: {
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
          name: 'Цена ФСО, р:'
        },
        be: {
          name: 'Цана ФСО, р:'
        },
        en: {
          name: 'Price ФСО, r:'
        }
      },
      dcostfull: {
        ru: {
          name: 'Цена ФСН, р:'
        },
        be: {
          name: 'Цана ФСН, р:'
        },
        en: {
          name: 'Price ФСН, r:'
        }
      },
      proteins: {
        ru: {
          name: 'Белки, г:'
        },
        be: {
          name: 'Белки, г:'
        },
        en: {
          name: 'Proteins, gr:'
        }
      },
      fats: {
        ru: {
          name: 'Жиры, г:'
        },
        be: {
          name: 'Жиры, г:'
        },
        en: {
          name: 'Fats, gr:'
        }
      },
      carbons: {
        ru: {
          name: 'Углеводы, г:'
        },
        be: {
          name: 'Углеводы, г:'
        },
        en: {
          name: 'Carbons, gr:'
        }
      },
      vitamins: {
        ru: {
          name: 'Витамины, мг:'
        },
        be: {
          name: 'Вітаміны, мг:'
        },
        en: {
          name: 'Vitamins, mg:'
        }
      },
      energy: {
        ru: {
          name: 'Калорийность, ккал:'
        },
        be: {
          name: 'Каларыйнасць, ккал:'
        },
        en: {
          name: 'Energy value, kcal:'
        }
      },
      B1: {
        ru: {
          name: 'B1'
        },
        be: {
          name: 'B1'
        },
        en: {
          name: 'B1'
        }
      },
      B2: {
        ru: {
          name: 'B2'
        },
        be: {
          name: 'B2'
        },
        en: {
          name: 'B2'
        }
      },
      C: {
        ru: {
          name: 'C'
        },
        be: {
          name: 'C'
        },
        en: {
          name: 'C'
        }
      },
      Ca: {
        ru: {
          name: 'Ca'
        },
        be: {
          name: 'Ca'
        },
        en: {
          name: 'Ca'
        }
      },
      Fe: {
        ru: {
          name: 'Fe'
        },
        be: {
          name: 'Fe'
        },
        en: {
          name: 'Fe'
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
        name: 'Цена ФСО, BYR'
      },
      be: {
        name: 'Цена ФСО, BYR'
      },
      en: {
        name: 'Цена ФСО, BYR'
      }
    }
  },
  {
    caption: {
      ru: {
        name: 'Цена ФСН, BYR'
      },
      be: {
        name: 'Цена ФСН, BYR'
      },
      en: {
        name: 'Цена ФСН, BYR'
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
        name: 'Штрих-код'
      },
      be: {
        name: 'Штрих-код'
      },
      en: {
        name: 'Штрих-код'
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

export const contactCaption: ContactCaptions =
  {
    description: {
      phone: {
        ru: {
          name: 'Телефон:'
        },
        be: {
          name: 'Тэлефон:'
        },
        en: {
          name: 'Phone:'
        }
      },
      fax: {
        ru: {
          name: 'Факс:'
        },
        be: {
          name: 'Факс:'
        },
        en: {
          name: 'Fax:'
        }
      },
      email: {
        ru: {
          name: 'email:'
        },
        be: {
          name: 'email:'
        },
        en: {
          name: 'email:'
        }
      }
    }
  };

export const outletsCaption: OutletsCaptions =
{
  description: {
    caption: {
      ru: {
        name: 'Наименование и адрес магазина/точки реализации'
      },
      be: {
        name: 'бел Наименование и адрес магазина/точки реализации'
      },
      en: {
        name: 'англ Наименование и адрес магазина/точки реализации'
      }
    },
    phone: {
      ru: {
        name: 'Телефон, факс'
      },
      be: {
        name: 'Тэлефон, факс'
      },
      en: {
        name: 'Phone, Fax'
      }
    },
    email: {
      ru: {
        name: 'Email'
      },
      be: {
        name: 'Email'
      },
      en: {
        name: 'Email'
      }
    },
    time: {
      ru: {
        name: 'Время работы'
      },
      be: {
        name: 'бел Время работы'
      },
      en: {
        name: 'англ Время работы'
      }
    },
    timewd: {
      ru: {
        name: 'Пн-пт'
      },
      be: {
        name: 'Пн-пт'
      },
      en: {
        name: 'Mon-Fr'
      }
    },
    timesat: {
      ru: {
        name: 'Сб'
      },
      be: {
        name: 'Сб'
      },
      en: {
        name: 'Sat'
      }
    },
    timesun: {
      ru: {
        name: 'Вс'
      },
      be: {
        name: 'Нд'
      },
      en: {
        name: 'Sun'
      }
    }
  }
};

export const moreCaption: PriceItem =
  {
    caption: {
      ru: {
        name: 'подробнее..'
      },
      be: {
        name: 'падрабязней..'
      },
      en: {
        name: 'more..'
      }
    }
  };

