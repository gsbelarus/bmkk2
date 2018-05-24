import * as React from 'react';
import './components.css';
import { LangSelector } from './LangSelector';
import { Language, IGoodGroups } from '../types';
import { SetLanguage, LoadGroups } from '../actions';
import { mainMenu } from '../const';
import { Link } from 'react-router-dom';

export type PageProps = {
  selectedLang: Language;
  groups: IGoodGroups;
  onSetLanguage: SetLanguage
  onLoadGroups: LoadGroups
};

export class Page extends React.Component<PageProps, {}> {

  constructor(props: PageProps) {
    super(props);
  }

  renderBody(): JSX.Element {
    return (<div />);
  }

  render() {
    const { selectedLang } = this.props;
    return (
      <div className={`${this.constructor.name} Page`}>
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
        <div className="WorkArea">
          {this.renderBody()}
        </div>
      </div>
    );
  }
}