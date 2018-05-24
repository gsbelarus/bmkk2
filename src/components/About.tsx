import * as React from 'react';
import { Page, PageProps } from './Page';
import { aboutRoot } from '../const';
import * as ReactMarkdown from 'react-markdown';

const md: { [lang: string]: string } = {
  ru: require(`../../public/data/about/about.ru.md`),
  be: require(`../../public/data/about/about.be.md`),
  en: require(`../../public/data/about/about.en.md`)
};

export class About extends Page {
  renderBody(): JSX.Element {
    const { selectedLang } = this.props;
    return (<ReactMarkdown source={md[selectedLang.toLowerCase()]} />);
  }
}