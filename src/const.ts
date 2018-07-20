import { MenuItems, GoodCaptions, PriceItems, ContactCaptions, OutletsCaptions, PriceItem, IAddInfo } from './types';

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
export const priceFile = `${goodsRoot}price.json`;
export const goodFileNoImage = 'noimage.png';
export const goodFileNoImage2 = 'noimage_big.png';
export const groupFileNoImage = 'noimage.png';
export const newsFile = `${newsRoot}news.json`;
export const contactsRoot = `${DATA_ROOT}contacts/`;
export const contactsFile = `${contactsRoot}contacts.json`;
export const departmentsFile = `${contactsRoot}departments.json`;
export const outletsRoot = `${DATA_ROOT}outlets/`;
export const outletsFile = `${outletsRoot}outlets.json`;

export const mainMenu: MenuItems = [
  {
    /*id: 1,
    path: `${PUBLIC_ROOT}`,
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
  { */
    id: 2,
    path: `${PUBLIC_ROOT}about`,
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
    id: 3,
    path: `${PUBLIC_ROOT}news`,
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
    id: 4,
    path: `${PUBLIC_ROOT}production`,
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
    id: 5,
    path: `${PUBLIC_ROOT}forcustomer`,
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
    id: 6,
    path: `${PUBLIC_ROOT}outlets`,
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
    id: 7,
    path: `${PUBLIC_ROOT}contacts`,
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

export const subMenu: MenuItems = [
  {
    id: 2,
    path: `${PUBLIC_ROOT}about#history`,
    caption: {
      ru: {
        name: 'История'
      },
      be: {
        name: 'Гісторыя'
      },
      en: {
        name: 'History'
      }
    }
  },
  {
    id: 2,
    path: `${PUBLIC_ROOT}about#staff`,
    caption: {
      ru: {
        name: 'Персонал'
      },
      be: {
        name: 'Персанал'
      },
      en: {
        name: 'Staff'
      }
    }
  },
  {
    id: 2,
    path: `${PUBLIC_ROOT}about#vacancy`,
    caption: {
      ru: {
        name: 'Вакансии'
      },
      be: {
        name: 'Вакансіі'
      },
      en: {
        name: 'Vacancy'
      }
    }
  },
  {
    id: 2,
    path: `${PUBLIC_ROOT}about#rest`,
    caption: {
      ru: {
        name: 'Отдых с нами'
      },
      be: {
        name: 'Адпачынак з намі'
      },
      en: {
        name: 'Holidays with us'
      }
    }
  },
  {
    id: 4,
    path: `${PUBLIC_ROOT}price`,
    caption: {
      ru: {
        name: 'Прейскурант'
      },
      be: {
        name: 'Прэйскурант'
      },
      en: {
        name: 'Price-list'
      }
    }
  },
  {
    id: 5,
    path: `${PUBLIC_ROOT}forcustomer#direction`,
    caption: {
      ru: {
        name: 'Схема проезда'
      },
      be: {
        name: 'Схема проезда'
      },
      en: {
        name: 'Схема проезда'
      }
    }
  },
  {
    id: 5,
    path: `${PUBLIC_ROOT}forcustomer#requisites`,
    caption: {
      ru: {
        name: 'Реквизиты предприятия'
      },
      be: {
        name: 'Реквизиты предприятия'
      },
      en: {
        name: 'Реквизиты предприятия'
      }
    }
  },
  {
    id: 6,
    path: `${PUBLIC_ROOT}outlets#foreigns`,
    caption: {
      ru: {
        name: 'Иностранным покупателям'
      },
      be: {
        name: 'бел Иностранным покупателям'
      },
      en: {
        name: 'англ Иностранным покупателям'
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
          name: 'Цена ФСО, руб:'
        },
        be: {
          name: 'Кошт ФСО, руб:'
        },
        en: {
          name: 'Price ФСО, r:'
        }
      },
      dcostfull: {
        ru: {
          name: 'Цена ФСН, руб:'
        },
        be: {
          name: 'Кошт ФСН, руб:'
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
          name: 'Бялкі, г:'
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
          name: 'Тлушчы, г:'
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
          name: 'Вугляводы, г:'
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
        name: 'Unit'
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
        name: 'Price FSO'
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
        name: 'Price FSN'
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
        name: 'Vat rate, %'
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
        name: 'Shelf life'
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
        name: 'Thermal state'
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
        name: 'Barcode'
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
        name: 'Description'
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

  export const addInfo: IAddInfo =
  {
    textRights: {
      ru: {
        name: 'Березовский мясоконсервный комбинат © 2018 г. Все права защищены.'
      },
      be: {
        name: 'Бярозаўскі мясакансервавы камбінат © 2018 г. Усё правы абаронены.'
      },
      en: {
        name: 'Bereza Meat Cannery © 2018 All rights reserved.'
      }
    },
    textPriceMore: {
      ru: {
        name: 'С полным прейскурантом продукции ОАО "Березовский мясоконсервный комбинат" можно ознакомиться'
      },
      be: {
        name: 'бел С полным прейскурантом продукции ОАО "Березовский мясоконсервный комбинат" можно ознакомиться'
      },
      en: {
        name: 'англ С полным прейскурантом продукции ОАО "Березовский мясоконсервный комбинат" можно ознакомиться'
      }
    },
    textPriceLink: {
      ru: {
        name: 'здесь'
      },
      be: {
        name: 'тут'
      },
      en: {
        name: 'here'
      }
    },
    textOutlets: {
      ru: {
        name: 'Комбинат имеет сеть фирменной торговли, где можно приобрести товар в розницу:'
      },
      be: {
        name: 'бел Комбинат имеет сеть фирменной торговли, где можно приобрести товар в розницу:'
      },
      en: {
        name: 'англ Комбинат имеет сеть фирменной торговли, где можно приобрести товар в розницу:'
      }
    },
    textPriceTop: {
      ru: {
        name: 'Прейскурант'
      },
      be: {
        name: 'Прэйскурант'
      },
      en: {
        name: 'Price-list'
      }
    },
    textPriceXlsTop: {
      ru: {
        name: 'Прейскурант XLS'
      },
      be: {
        name: 'Прэйскурант XLS'
      },
      en: {
        name: 'Price-list XLS'
      }
    }
  };

