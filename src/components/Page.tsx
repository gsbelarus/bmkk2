import * as React from 'react';
import './components.css';
import { LangSelector } from './LangSelector';
import { Language, IGoodGroups, IGoods } from '../types';
import { SetLanguage, LoadGroups, LoadGoods } from '../actions';
import { mainMenu } from '../const';
import { Link } from 'react-router-dom';

export interface PageProps {
  selectedLang: Language;
  groups: IGoodGroups;
  goods: IGoods;
  onSetLanguage: SetLanguage
  onLoadGroups: LoadGroups
  onLoadGoods: LoadGoods
};

export class Page<P extends PageProps = PageProps> extends React.Component<P, {}> {

  constructor(props: P) {
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