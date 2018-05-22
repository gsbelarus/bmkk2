import * as React from 'react';
import './components.css';
import { LangSelector } from './LangSelector';
import { Language } from '../types';
import { SetLanguage } from '../actions';
import { mainMenu } from '../const';
import { Link } from 'react-router-dom';

const logoImg = require('../../public/image/logo.png');

export type PageProps = {
  selectedLang: Language;
  onSetLanguage: SetLanguage
};

export type PageState = {
  backClass: string;
};

export class Page extends React.Component<PageProps, PageState> {

  constructor(props: PageProps) {
    super(props);
    this.state = {
      backClass: ''
    };
  }

  render() {
    const { selectedLang } = this.props;
    return (
      <div className={this.state.backClass}>
        <div className="TopRibbon">
          <LangSelector {...this.props} />
        </div>
        <nav className="TopMenu">
          {
            mainMenu.map( mi => (
              <Link to={`/${mi.path}`}><span>{mi.caption[selectedLang.toLowerCase()].name}</span></Link>
            ))
          }
        </nav>
        <img className="Logo" src={logoImg} />
      </div>
    );
  }
}