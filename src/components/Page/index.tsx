import * as React from 'react';
import './page.css';
import { LangSelector } from '../LangSelector/index';
import { Language, IGoodGroups, IGoods, IPrice, INews, IContacts, IDepartments, IOutlets } from '../../types';
import { SetLanguage, LoadGroups, LoadGoods, LoadPrice, LoadNews, LoadContacts, LoadDepartments, LoadOutlets } from '../../actions';
import { mainMenu, subMenu, goodGroupsFile, goodsFile, priceFile, addInfo, priceCaption  } from '../../const';
import { Link, RouteComponentProps } from 'react-router-dom';
import { LName } from '../../types';
import {CSVLink} from 'react-csv';

export interface PageProps extends RouteComponentProps<any> {
  selectedLang: Language;
  groups: IGoodGroups;
  goods: IGoods;
  price: IPrice;  
  news: INews;
  contacts: IContacts;
  departments: IDepartments;
  outlets: IOutlets;
  sl: string;
  onSetLanguage: SetLanguage;
  onLoadGroups: LoadGroups;
  onLoadGoods: LoadGoods;
  onLoadPrice: LoadPrice;  
  onLoadNews: LoadNews;
  onLoadContacts: LoadContacts;
  onLoadDepartments: LoadDepartments;
  onLoadOutlets: LoadOutlets;
}

export class Page<P extends PageProps = PageProps> extends React.Component<P, {}> {

  protected fullWidth: boolean;
  protected logoImg: any;  

  constructor(props: P) {
    super(props);
    this.fullWidth = false;
    // this.logoImg = require('../../../public/image/logo_white_bg.png');
  }

  componentDidMount() {
    const { goods, price, groups, onLoadGoods, onLoadPrice, onLoadGroups } = this.props;

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

    if (!price) {
      fetch(priceFile)
      .then( res => res.text() )
      .then( res => JSON.parse(res) )
      .then( res => onLoadPrice(res as IPrice) )
      .catch( err => console.log(err) );
    }  

  }

  renderBody(): JSX.Element {
    return (<div />);
  }

  renderNavPath(props: PageProps): JSX.Element[] {
    const { location, sl } = props;
    const pathname = location.pathname;

    if (pathname === '/') {
      return [];
    }

    const navPath = pathname.split('/').reduce(
      (p, c, idx) => {
        const mi = mainMenu.find( m => m.path === `/${c}` );
        const capt = mi ? mi.caption[sl].name : c;

        if (mi) {
          p.push(<span key={idx}><Link to={mi.path}>{capt}</Link></span>);
        } else {
          p.push(<span key={idx}>{capt}</span>);
        };

        return p;
      }, [] as JSX.Element[]
    )
    return navPath;
  }

  getPageStyle() {
    return 'Page';
  }

  static getLName(lname: LName | undefined, l: string) {
    const lang = l.toLowerCase();
    return lname && lname[lang] && lname[lang].name ?
      lname[lang].name : (
        lname && lname['ru'] && lname['ru'].name ? lname['ru'].name : ''
      );
  }  

  render() {
    const { sl, location, goods, price } = this.props;
    let csvData: any | undefined = undefined;
    let headers: any | undefined = undefined;

    if (goods && price) {
      csvData = [];
      headers = []; 
      priceCaption.map( (pr, idx) => (
        headers.push ({label: pr.caption['ru'].name, key: pr.caption['en'].name})
      ));
      goods.goods.map( (g, idx) => (       
        headers.map( (h, idx) => (
          csvData.push ({
              
          })
        ))
      ))        
    }

    return (
      <div>
        <div className={this.getPageStyle()}>
          <div className="TopRibbon">
            {csvData && <div><CSVLink headers={headers} data={csvData}>Прейскурант XLS</CSVLink></div>}
            <div><Link to={`/price`}>Прейскурант</Link></div>
            <LangSelector {...this.props} />
          </div>
          <nav className="TopMenu">
            {
              mainMenu
              .filter( f => f.path )
              .map( (mi, idx) => (
                <Link key={idx} to={mi.path} className={mi.path !== '/' && location.pathname.endsWith(mi.path) ? "Selected" : ""}>
                  <span>
                    {mi.caption[sl].name}
                  </span>
                </Link>
              ))
            }
          </nav>
          <div className={this.fullWidth ? "WorkAreaFullWidth" : "WorkArea"}>
            {this.fullWidth ? null : <div className="navPath">{this.renderNavPath(this.props)}</div>}
            {this.renderBody()}
            <Link to="/">
              {this.logoImg && <img className="Logo" src={this.logoImg} />}
            </Link>
          </div>

        </div>
        <footer>
            <div className="Bottom">          
              <Link to="/">
                {this.logoImg && <img className="Logo" src={this.logoImg} />}
              </Link>
              <nav className="FooterMenu">
                {
                  mainMenu
                  .filter( f => f.path )
                  .map( (mi, idx) => {
                    const subM = subMenu.filter( t => t.id === mi.id );
                    return (
                      <Link key={idx} to={mi.path} className={mi.path !== '/' && location.pathname.endsWith(mi.path) ? "Selected" : ""}>
                        <span>
                          {mi.caption[sl].name}
                          <ul>
                            {
                              subM && subM.map( (sm, idx) => (
                              <li> 
                                <Link key={idx} to={sm.path}>
                                  { sm.caption[sl].name}
                                </Link>   
                              </li>
                              ))                              
                            }
                            {mi.id === 7 && <li>Тел.: +375-1643-9-11-11 </li> }
                            {mi.id === 7 && <li>Тел.: +375-1643-9-11-12 </li> }
                            {mi.id === 7 && <li>Email: bmkk@meat.by </li> }
                          </ul>
                        </span>
                      </Link>                      
                    )
                  })
                  
                }   
                      
              </nav> 
              <div className="TextRights">
                {addInfo.textRights[sl].name}
              </div>
            </div>  
        </footer>      
      </div>
    );
  }
}