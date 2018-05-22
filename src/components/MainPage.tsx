import * as React from 'react';
import './components.css';
import { LangSelector } from './LangSelector';
import { Language } from '../types';
import { SetLanguage } from '../actions';
import { mainMenu } from '../const';
import { Link } from 'react-router-dom';

const logoImg = require('../../public/image/logo.png');

export type MainPageProps = {
  selectedLang: Language;
  onSetLanguage: SetLanguage
};

export class MainPage extends React.Component<MainPageProps, {}> {
  render() {
    const { selectedLang } = this.props;
    return (
      <div className="Back">
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