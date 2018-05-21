import * as React from 'react';
import './components.css';
import { LangSelector } from './LangSelector';
import { Language } from '../types';
import { SetLanguage } from '../actions';

const logoImg = require('../../public/image/logo.png');

export type MainPageProps = {
  selectedLang: Language;
  onSetLanguage: SetLanguage
};

export class MainPage extends React.Component<MainPageProps, {}> {
  render() {
    return (
      <div className="Back">
        <div className="TopRibbon">
          <LangSelector {...this.props} />
        </div>
        <div className="TopMenu">
          CDE
        </div>
        <img className="Logo" src={logoImg} />
      </div>
    );
  }
}