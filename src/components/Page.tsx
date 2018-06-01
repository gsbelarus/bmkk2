import * as React from 'react';
import './components.css';
import { LangSelector } from './LangSelector';
import { Language, IGoodGroups, IGoods, INews } from '../types';
import { SetLanguage, LoadGroups, LoadGoods, LoadNews } from '../actions';
import { mainMenu } from '../const';
import { Link, RouteComponentProps } from 'react-router-dom';

export interface PageProps extends RouteComponentProps<any> {
  selectedLang: Language;
  groups: IGoodGroups;
  goods: IGoods;
  news: INews;
  onSetLanguage: SetLanguage;
  onLoadGroups: LoadGroups;
  onLoadGoods: LoadGoods;
  onLoadNews: LoadNews;  
}

export class Page<P extends PageProps = PageProps> extends React.Component<P, {}> {

  constructor(props: P) {
    super(props);
  }

  renderBody(): JSX.Element {
    return (<div />);
  }

  render() {
    const { selectedLang, location } = this.props;
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
          {location.pathname !== '/' && <div>{location.pathname}</div>}
          {this.renderBody()}
        </div>
      </div>
    );
  }
}