import * as React from 'react';
import './page.css';
import { LangSelector } from '../LangSelector/index';
import { Language, IGoodGroups, IGoods, IPrice, INews, IContacts, IDepartments, IOutlets } from '../../types';
import { SetLanguage, LoadGroups, LoadGoods, LoadPrice, LoadNews, LoadContacts, LoadDepartments, LoadOutlets } from '../../actions';
import { mainMenu, subMenu, goodGroupsFile, goodsFile, priceFile, addInfo, priceCaption  } from '../../const';
import { Link, RouteComponentProps } from 'react-router-dom';
import { LName } from '../../types';
import {CSVLink} from 'react-csv';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { SimleSlider } from '../Slider/SimleSlider';

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

export class Page<P extends PageProps = PageProps> extends React.PureComponent<P, {}> {

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
    let csvData: any | undefined = null;
    let headers: {label: string, key: number}[] = [];

    if (goods && price) {
      csvData = [];      
      priceCaption.map( (pr, p_idx) =>
        headers.push ({label: pr.caption['ru'].name, key: p_idx+1})
      );
      goods.goods.map( (g, idx) => {
        const myprice = price.price.find( p => p.ruid === g.ruid );
        return csvData.push ({
            '1' : idx+1, 
            '2' : g.fullname + ' ', 
            '3' : Page.getLName(g.valuename, sl), 
            '4' : myprice && myprice.costnde,
            '5' : myprice && myprice.dcostfull,
            '6' : g.rate,          
            '7' : g.beforuse,
            '8' : g.term,
            '9' : myprice && myprice.barcode,
            '10' : Page.getLName(g.ingredients, sl)
        });             
      })    
    }
    return (
      <div>        
        <div className={this.getPageStyle()}>
          <header>           
            <div className="TopRibbon">
              <div className="container TopRibbonContent">      
                {csvData && <div><CSVLink filename={"PriceBmkk.xls"} headers={headers} data={csvData}>{addInfo.textPriceXlsTop[sl].name}</CSVLink></div>}
                <div><Link to={`/price`}>{addInfo.textPriceTop[sl].name}</Link></div>
                <LangSelector {...this.props} />
                </div>
              </div>            
            <nav className="TopMenu">  
              <div className="container TopMenuContent">                  
                {
                  mainMenu
                  .filter( f => f.path )
                  .map( (mi, idx) => 
                    <Link key={idx} to={mi.path} >
                      <span className={mi.path !== '/' && location.pathname.endsWith(mi.path) ? "Selected" : ""}>
                        {mi.caption[sl].name}
                      </span>
                    </Link>
                  )
                }
              </div>  
            </nav>             
          </header>    
          <div className="header-back" >
            {/* <div class="billboard gs-container"> 

            </div>*/}
          </div>          
          <main className="FullPage">
            <div className="container"> 
              <div className={this.fullWidth ? "WorkAreaFullWidth" : "WorkArea"}>
                {this.fullWidth ? null : <div className="navPath">{this.renderNavPath(this.props)}</div>}
                {this.renderBody()}
                <Link to="/">
                  {this.logoImg && <img className="Logo" src={this.logoImg} />}
                </Link>
              </div> 
              <div className={this.getPageStyle().includes('MainPage')  ? "Slider" : "NoneDisplay"}>              
                <SimleSlider />
              </div>  
            </div>    
          </main>        
          <footer>
            <div className="Bottom">  
              <div className="container">         
                <Link to="/">
                  {<img className="Logo" src={this.logoImg} />}
                </Link>
                <nav className="FooterMenu">
                  {
                    mainMenu
                    .filter( f => f.path )
                    .map( (mi, idx) => {
                      const subM = subMenu.filter( t => t.id === mi.id );
                      return (
                        <div>                      
                        <span key={idx}>
                          <ul>
                            <li key={idx} className="TopLi">                                                    
                              <Link to={mi.path} className={mi.path !== '/' && location.pathname.endsWith(mi.path) ? "Selected" : ""}> 
                                {mi.caption[sl].name}
                              </Link>                           
                            </li>
                            {
                              subM && subM.map( (sm, idx) => (
                              <li key={idx}> 
                                <a href={sm.path}>
                                  {sm.caption[sl].name}
                                </a>   
                              </li>
                              ))                              
                            }
                            {mi.id === 7 && <li key={idx+1}>Тел.: +375-1643-9-11-11 </li> }
                            {mi.id === 7 && <li key={idx+2}>Тел.: +375-1643-9-11-12 </li> }
                            {mi.id === 7 && <li key={idx+3}>Email: bmkk@meat.by </li> }
                          </ul>
                        </span>                      
                        </div>                                          
                      )
                    })
                  }   
                </nav> 
                <div className="footer-copyright">
                  {addInfo.textRights[sl].name}
                </div>
              </div>  
            </div>
          </footer>  
        </div>    
      </div>
    );
  }
}