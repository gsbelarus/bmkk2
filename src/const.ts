import {
  MenuItems,
  GoodCaptions,
  PriceItems,
  ContactCaptions,
  OutletsCaptions,
  PriceItem,
  IAddInfo
} from "./types";

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
export const noImageRoot = `${DATA_ROOT}noimage/`;
export const goodFileNoImage = "noimage.png";
export const goodFileNoImage2 = "noimage_big.png";
export const groupFileNoImage = "noimage.png";
export const outletFileNoImage = "outlet.png";
export const newsFile = `${newsRoot}news.json`;
export const contactsRoot = `${DATA_ROOT}contacts/`;
export const contactsFile = `${contactsRoot}contacts.json`;
export const departmentsFile = `${contactsRoot}departments.json`;
export const outletsRoot = `${DATA_ROOT}outlets/`;
export const outletsFile = `${outletsRoot}outlets.json`;
export const forcustomerRoot = `${DATA_ROOT}forcustomer/`;
export const downloadsRoot = `${DATA_ROOT}downloads/`;
export const COUNT_IMG_BG = 14;

// export const mainMenu: MenuItems = [
//   {
//     id: "about",
//     path: `${PUBLIC_ROOT}about`,
//     caption: {
//       ru: {
//         name: 'О нас'
//       },
//       be: {
//         name: 'Пра нас'
//       },
//       en: {
//         name: 'About'
//       }
//     }
//   }
// ];

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
        name: "О нас"
      },
      be: {
        name: "Пра нас"
      },
      en: {
        name: "About"
      }
    }
  },
  {
    id: 3,
    path: `${PUBLIC_ROOT}news`,
    caption: {
      ru: {
        name: "Новости"
      },
      be: {
        name: "Навіны"
      },
      en: {
        name: "News"
      }
    }
  },
  {
    id: 4,
    path: `${PUBLIC_ROOT}production`,
    caption: {
      ru: {
        name: "Продукция"
      },
      be: {
        name: "Прадукцыя"
      },
      en: {
        name: "Products"
      }
    }
  },
  {
    id: 5,
    path: `${PUBLIC_ROOT}forcustomer`,
    caption: {
      ru: {
        name: "Клиентам"
      },
      be: {
        name: "Кліентам"
      },
      en: {
        name: "Partners"
      }
    }
  },
  {
    id: 6,
    path: `${PUBLIC_ROOT}outlets`,
    caption: {
      ru: {
        name: "Фирменная торговля"
      },
      be: {
        name: "Фірмовы гандаль"
      },
      en: {
        name: "Outlets"
      }
    }
  },
  {
    id: 7,
    path: `${PUBLIC_ROOT}rest`,
    caption: {
      ru: {
        name: "Отдых с Нами"
      },
      be: {
        name: "Адпачанак з Намi"
      },
      en: {
        name: "Holidays with Us"
      }
    }
  },
  {
    id: 8,
    path: `${PUBLIC_ROOT}contacts`,
    caption: {
      ru: {
        name: "Контакты"
      },
      be: {
        name: "Кантакты"
      },
      en: {
        name: "Contacts"
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
        name: "История"
      },
      be: {
        name: "Гісторыя"
      },
      en: {
        name: "History"
      }
    }
  },
  // {
  //   id: 2,
  //   path: `${PUBLIC_ROOT}about#staff`,
  //   caption: {
  //     ru: {
  //       name: 'Персонал'
  //     },
  //     be: {
  //       name: 'Персанал'
  //     },
  //     en: {
  //       name: 'Staff'
  //     }
  //   }
  // },
  // {
  //   id: 2,
  //   path: `${PUBLIC_ROOT}about#vacancy`,
  //   caption: {
  //     ru: {
  //       name: 'Вакансии'
  //     },
  //     be: {
  //       name: 'Вакансіі'
  //     },
  //     en: {
  //       name: 'Vacancy'
  //     }
  //   }
  // },
  // {
  //   id: 4,
  //   path: `${PUBLIC_ROOT}price`,
  //   caption: {
  //     ru: {
  //       name: 'Прейскурант'
  //     },
  //     be: {
  //       name: 'Прэйскурант'
  //     },
  //     en: {
  //       name: 'Price-list'
  //     }
  //   }
  // },
  {
    id: 5,
    path: `${PUBLIC_ROOT}forcustomer#direction`,
    caption: {
      ru: {
        name: "Схема проезда"
      },
      be: {
        name: "Схема праезду"
      },
      en: {
        name: "Directions"
      }
    }
  },
  {
    id: 5,
    path: `${PUBLIC_ROOT}forcustomer#requisites`,
    caption: {
      ru: {
        name: "Реквизиты предприятия"
      },
      be: {
        name: "Рэквізіты прадпрыемства"
      },
      en: {
        name: "Requisites"
      }
    }
  },
  {
    id: 5,
    path: `${PUBLIC_ROOT}forcustomer#foreigns`,
    caption: {
      ru: {
        name: "Иностранным покупателям"
      },
      be: {
        name: "Іншаземным пакупнікам"
      },
      en: {
        name: "For foreign customers"
      }
    }
  }
];

export const goodCaption: GoodCaptions = {
  ingredients: {
    ru: {
      name: "Состав:"
    },
    be: {
      name: "Склад:"
    },
    en: {
      name: "Ingredients:"
    }
  },
  casing: {
    ru: {
      name: "Оболочка:"
    },
    be: {
      name: "Абалонка:"
    },
    en: {
      name: "Casing:"
    }
  },
  beforuse: {
    ru: {
      name: "Срок реализации:"
    },
    be: {
      name: "Тэрмін рэалізацыі:"
    },
    en: {
      name: "Sell by:"
    }
  },
  costnde: {
    ru: {
      name: "Цена ФСО, руб:"
    },
    be: {
      name: "Кошт ФСА, руб:"
    },
    en: {
      name: "Price FCA, rub:"
    }
  },
  dcostfull: {
    ru: {
      name: "Цена ФСН, руб:"
    },
    be: {
      name: "Кошт ФСН, руб:"
    },
    en: {
      name: "Price DAP, rub:"
    }
  },
  textDiscount: {
    ru: {
      name: "Скидка!"
    },
    be: {
      name: "Зніжка!"
    },
    en: {
      name: "Discount!"
    }
  },
  textNew: {
    ru: {
      name: "Новинка!"
    },
    be: {
      name: "Навінка!"
    },
    en: {
      name: "New!"
    }
  },
  proteins: {
    ru: {
      name: "Белки, г:"
    },
    be: {
      name: "Бялкі, г:"
    },
    en: {
      name: "Proteins, gr:"
    }
  },
  fats: {
    ru: {
      name: "Жиры, г:"
    },
    be: {
      name: "Тлушчы, г:"
    },
    en: {
      name: "Fats, gr:"
    }
  },
  carbons: {
    ru: {
      name: "Углеводы, г:"
    },
    be: {
      name: "Вугляводы, г:"
    },
    en: {
      name: "Carbons, gr:"
    }
  },
  vitamins: {
    ru: {
      name: "Витамины, мг:"
    },
    be: {
      name: "Вітаміны, мг:"
    },
    en: {
      name: "Vitamins, mg:"
    }
  },
  energy: {
    ru: {
      name: "Калорийность, ккал:"
    },
    be: {
      name: "Каларыйнасць, ккал:"
    },
    en: {
      name: "Energy value, kcal:"
    }
  },
  B1: {
    ru: {
      name: "B1"
    },
    be: {
      name: "B1"
    },
    en: {
      name: "B1"
    }
  },
  B2: {
    ru: {
      name: "B2"
    },
    be: {
      name: "B2"
    },
    en: {
      name: "B2"
    }
  },
  C: {
    ru: {
      name: "C"
    },
    be: {
      name: "C"
    },
    en: {
      name: "C"
    }
  },
  Ca: {
    ru: {
      name: "Ca"
    },
    be: {
      name: "Ca"
    },
    en: {
      name: "Ca"
    }
  },
  Fe: {
    ru: {
      name: "Fe"
    },
    be: {
      name: "Fe"
    },
    en: {
      name: "Fe"
    }
  }
};

export const priceCaption: PriceItems = [
  {
    caption: {
      ru: {
        name: "№"
      },
      be: {
        name: "№"
      },
      en: {
        name: "№"
      }
    }
  },
  {
    caption: {
      ru: {
        name: "Наименование"
      },
      be: {
        name: "Назва"
      },
      en: {
        name: "Name"
      }
    }
  },
  {
    caption: {
      ru: {
        name: "Ед. изм."
      },
      be: {
        name: "Адз. вым."
      },
      en: {
        name: "Unit"
      }
    }
  },
  {
    caption: {
      ru: {
        name: "Цена ФСО, BYR"
      },
      be: {
        name: "Кошт ФСА, BYR"
      },
      en: {
        name: "Price FCA, BYR"
      }
    }
  },
  {
    caption: {
      ru: {
        name: "Цена ФСН, BYR"
      },
      be: {
        name: "Кошт ФСН, BYR"
      },
      en: {
        name: "Price DAP, BYR"
      }
    }
  },
  {
    caption: {
      ru: {
        name: "Ставка НДС, %"
      },
      be: {
        name: "Стаўка ПДВ, %"
      },
      en: {
        name: "VAT rate, %"
      }
    }
  },
  {
    caption: {
      ru: {
        name: "Срок хранения"
      },
      be: {
        name: "Тэрмін захоўвання"
      },
      en: {
        name: "Best before"
      }
    }
  },
  {
    caption: {
      ru: {
        name: "Терм. состояние"
      },
      be: {
        name: "Тэрм. стан"
      },
      en: {
        name: "Thermal state"
      }
    }
  },
  {
    caption: {
      ru: {
        name: "Штрих-код"
      },
      be: {
        name: "Штрых-код"
      },
      en: {
        name: "Barcode"
      }
    }
  },
  {
    caption: {
      ru: {
        name: "Описание"
      },
      be: {
        name: "Апісанне"
      },
      en: {
        name: "Description"
      }
    }
  }
];

export const contactCaption: ContactCaptions = {
  phone: {
    ru: {
      name: "Телефон:"
    },
    be: {
      name: "Тэлефон:"
    },
    en: {
      name: "Phone:"
    }
  },
  fax: {
    ru: {
      name: "Факс:"
    },
    be: {
      name: "Факс:"
    },
    en: {
      name: "Fax:"
    }
  },
  email: {
    ru: {
      name: "email:"
    },
    be: {
      name: "email:"
    },
    en: {
      name: "email:"
    }
  }
};

export const addInfo: IAddInfo = {
  textRights: {
    ru: {
      name: "Березовский мясоконсервный комбинат © 2018 г. Все права защищены."
    },
    be: {
      name: "Бярозаўскі мясакансервавы камбінат © 2018 г. Усё правы абаронены."
    },
    en: {
      name: "Bereza Meat Processing Plant © 2018. All rights reserved."
    }
  },
  textPriceMore: {
    ru: {
      name:
        'С полным прейскурантом продукции ОАО "Березовский мясоконсервный комбинат" можно ознакомиться'
    },
    be: {
      name:
        'З поўным прэйскурантам прадукцыі ААТ "Бярозаўскі мясакансервавы камбінат" можна азнаёміцца'
    },
    en: {
      name:
        "A complete price list of production of Bereza Meat Processing Plant can be read"
    }
  },
  textPriceLink: {
    ru: {
      name: "здесь"
    },
    be: {
      name: "тут"
    },
    en: {
      name: "here"
    }
  },
  textOutlets: {
    ru: {
      name:
        "Комбинат имеет сеть фирменной торговли, где можно приобрести товар в розницу:"
    },
    be: {
      name:
        "Камбінат мае сетку фірмовага гандлю, дзе магчыма набыць тавару раздроб:"
    },
    en: {
      name:
        "The plant has a network of outlets where a production can be bought:"
    }
  },
  textPriceTop: {
    ru: {
      name: "Прайс-лист"
    },
    be: {
      name: "Прайс-аркуш"
    },
    en: {
      name: "Price-list"
    }
  },
  textPriceXlsTop: {
    ru: {
      name: "Скачать Прайс-лист"
    },
    be: {
      name: "Спампаваць Прайс-аркуш"
    },
    en: {
      name: "Download Price-list"
    }
  },
  textPriceDescr: {
		ru: {
      name: "Полный прайс-лист в формате CSV (Microsoft Excel) на продукцию предприятия с указанием наименования, состава, срока хранения, штрих-кода, цен ФСО и ФСН."
    },
      be: {
        name: "Полный прайс-лист в формате CSV (Microsoft Excel) на продукцию предприятия с указанием наименования, состава, срока хранения, штрих-кода, цен ФСО и ФСН."
      },
      en: {
        name: "Полный прайс-лист в формате CSV (Microsoft Excel) на продукцию предприятия с указанием наименования, состава, срока хранения, штрих-кода, цен ФСО и ФСН."
      }
    },
  textDownLoadFilesTop: {
    ru: {
      name: "Материалы для скачивания"
    },
    be: {
      name: "Матэрыялы для спампоўкі"
    },
    en: {
      name: "Files for download"
    }
  },
  moreCaption: {
    ru: {
      name: "подробнее.."
    },
    be: {
      name: "падрабязней.."
    },
    en: {
      name: "more.."
    }
  },
  textPriceName: {
    ru: {
      name: "в соответствии с прейскурантом цен на "
    },
    be: {
      name: "у адпаведнасці з прэйскурантам коштаў на "
    },
    en: {
      name: "in accordance with the price-list for "
    }
  },
  texName: {
    ru: {
      name: 'ОАО "Березовский мясоконсервный комбинат"'
    },
    be: {
      name: 'ААТ "Бярозаўскі мясакансервавы камбінат"'
    },
    en: {
      name: 'JSV "Bereza Meat Processing Plant"'
    }
  }
};

export const headers: { label: string; key: number }[] = [];

priceCaption.map((pr, p_idx) =>
  headers.push({ label: pr.caption["ru"].name, key: p_idx + 1 })
);

export const outletsCaption: OutletsCaptions = {
  caption: {
    ru: {
      name: "Наименование и адрес магазина/точки реализации"
    },
    be: {
      name: "Назва і адрас крамы/пункта продажу"
    },
    en: {
      name: "Name and address of a shop/point of sale"
    }
  },
  address: {
    ru: {
      name: "Адрес"
    },
    be: {
      name: "Адрас"
    },
    en: {
      name: "Address"
    }
  },
  phone: {
    ru: {
      name: "Телефон, факс"
    },
    be: {
      name: "Тэлефон, факс"
    },
    en: {
      name: "Phone, Fax"
    }
  },
  email: {
    ru: {
      name: "Email"
    },
    be: {
      name: "Email"
    },
    en: {
      name: "Email"
    }
  },
  timewd: {
    ru: {
      name: "В рабочие дни"
    },
    be: {
      name: "У працоўныя дні"
    },
    en: {
      name: "Weekdays"
    }
  },
  timesat: {
    ru: {
      name: "Сб"
    },
    be: {
      name: "Сб"
    },
    en: {
      name: "Sat"
    }
  },
  timesun: {
    ru: {
      name: "Вс"
    },
    be: {
      name: "Нд"
    },
    en: {
      name: "Sun"
    }
  },
  coordinates: {
    ru: {
      name: "Координаты"
    },
    be: {
      name: "Каардынаты"
    },
    en: {
      name: "Coordinates"
    }
  }
};
