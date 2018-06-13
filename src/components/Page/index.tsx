import * as React from 'react';
import './page.css';
import { LangSelector } from '../LangSelector/index';
import { Language, IGoodGroups, IGoods, INews, IContacts, IDepartments, IOutlets } from '../../types';
import { SetLanguage, LoadGroups, LoadGoods, LoadNews, LoadContacts, LoadDepartments, LoadOutlets } from '../../actions';
import { mainMenu, goodGroupsFile, goodsFile } from '../../const';
import { Link, RouteComponentProps } from 'react-router-dom';

export interface PageProps extends RouteComponentProps<any> {
  selectedLang: Language;
  groups: IGoodGroups;
  goods: IGoods;
  news: INews;
  contacts: IContacts;
  departments: IDepartments;
  outlets: IOutlets;
  onSetLanguage: SetLanguage;
  onLoadGroups: LoadGroups;
  onLoadGoods: LoadGoods;
  onLoadNews: LoadNews;
  onLoadContacts: LoadContacts;
  onLoadDepartments: LoadDepartments;
  onLoadOutlets: LoadOutlets;
}

export class Page<P extends PageProps = PageProps> extends React.Component<P, {}> {
  protected logoImg: any;
  protected fullWidth: boolean;

  constructor(props: P) {
    super(props);
    this.fullWidth = false;
    // this.logoImg = require('../../../public/image/logo_black.png');
  }

  componentDidMount() {
    const { goods, groups, onLoadGoods, onLoadGroups } = this.props;

    if (!groups) {
      fetch(goodGroupsFile)
      .then( res => res.text() )
      .then( res => JSON.parse(res) )
      .then( res => onLoadGroups(res as IGoodGroups) )
      .catch( err => console.log(err) );
    }

    if (!goods) {
      fetch(goodsFile)
      .then( res => res.text() )
      .then( res => JSON.parse(res) )
      .then( res => onLoadGoods(res as IGoods) )
      .catch( err => console.log(err) );
    }
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
            mainMenu.map( (mi, idx) => (
              <Link key={idx} to={`/${mi.path}`}><span>{mi.caption[selectedLang.toLowerCase()].name}</span></Link>
            ))
          }
        </nav>
        <div className={this.fullWidth ? "WorkAreaFullWidth" : "WorkArea"}>
          {/* location.pathname !== '/' && <div>{location.pathname}</div> */}
          {this.renderBody()}
          {this.logoImg && <img className="Logo" src={this.logoImg} />}
        </div>
      </div>
    );
  }
}