import * as React from 'react';
import { Page } from '../Page';
import * as ReactMarkdown from 'react-markdown';

const md: { [lang: string]: string } = {
  ru: require(`../../../public/data/forcustomer/forcustomer.ru.md`),
  be: require(`../../../public/data/forcustomer/forcustomer.be.md`),
  en: require(`../../../public/data/forcustomer/forcustomer.en.md`)
};

export class ForCustomer extends Page {
  renderBody(): JSX.Element {
    const { selectedLang } = this.props;
    return (<ReactMarkdown source={md[selectedLang.toLowerCase()]} />);
  }
}