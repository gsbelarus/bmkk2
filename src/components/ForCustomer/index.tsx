import * as React from 'react';
import { Page } from '../Page';
import * as ReactMarkdown from 'react-markdown';
import './forcustomer.css';

const md: { [lang: string]: string } = {
  ru: require(`../../../public/data/forcustomer/forcustomer.ru.md`),
  be: require(`../../../public/data/forcustomer/forcustomer.be.md`),
  en: require(`../../../public/data/forcustomer/forcustomer.en.md`)
};

const map = require('../../../public/image/map.jpg');

export class ForCustomer extends Page {

  getPageStyle() {
    return `${super.getPageStyle()} ForCustomer`;
  }

  renderBody(): JSX.Element {
    const { selectedLang } = this.props;
    return (
      <div>
        <ReactMarkdown source={md[selectedLang.toLowerCase()]} />
        <a href="https://www.google.com/maps/place/Berozovskiy+Myasokonservnyy+Kombinat/@52.543019,24.9606592,14.5z/data=!4m5!3m4!1s0x4720b6da3c7872d3:0xbf3aaf50876462b4!8m2!3d52.542146!4d24.9549723">
          <img src={map} />
        </a> 
      </div>
    );
  }
}