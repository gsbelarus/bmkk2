import * as React from "react";
import "./page.css";
import { LangSelector } from "../LangSelector";
import {
  Language,
  IGoodGroups,
  IGoods,
  IPrice,
  INews,
  IContacts,
  IDepartments,
  IOutlets,
  IcsvData,
  OnLoadMDFile,
  IxlsxData
} from "../../types";
import {
  SetLanguage,
  LoadGroups,
  LoadGoods,
  LoadPrice,
  LoadNews,
  LoadContacts,
  LoadDepartments,
  LoadOutlets,
  LoadcsvData,
  LoadxlsxData,
  LoadOutletsMD,
  LoadForForeignersMD,
  LoadAboutMD,
  LoadHistoryMD,
  LoadStaffMD,
  LoadVacancyMD,
  LoadRestMD,
  LoadRestMD2,
  LoadDirectionMD,
  LoadRequisitesMD,
  LoadForCustomerMD,
  LoadPriceTitleMD,
  LoadDownLoadMD,
  LoadAutomationMD
} from "../../actions";
import {
  mainMenu,
  subMenu,
  goodGroupsFile,
  goodsFile,
  priceFile,
  addInfo,
  COUNT_IMG_BG,
  newsFile,
  headersX
} from "../../const";
import { RouteComponentProps } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { LName } from "../../types";
import { Trade } from "../Trade";
import * as ReactGA from 'react-ga';

export interface PageProps extends RouteComponentProps<any> {
  selectedLang: Language;
  groups?: IGoodGroups;
  goods?: IGoods;
  price?: IPrice;
  news?: INews;
  contacts?: IContacts;
  departments?: IDepartments;
  outlets?: IOutlets;
  outletsMD?: LName;
  aboutMD?: LName;
  historyMD?: LName;
  automationMD?: LName;
  staffMD?: LName;
  vacancyMD?: LName;
  restMD?: LName;
  restMD2?: LName;
  forForeignersMD?: LName;
  directionMD?: LName;
  requisitesMD?: LName;
  forCustomerMD?: LName;
  priceTitleMD?: LName;
  downLoadMD?: LName;
  csvData?: IcsvData;
  xlsxData?: IxlsxData;
  sl: string;
  onSetLanguage: SetLanguage;
  onLoadGroups: LoadGroups;
  onLoadGoods: LoadGoods;
  onLoadPrice: LoadPrice;
  onLoadNews: LoadNews;
  onLoadContacts: LoadContacts;
  onLoadDepartments: LoadDepartments;
  onLoadOutlets: LoadOutlets;
  onLoadOutletsMD: LoadOutletsMD;
  onLoadForForeignersMD: LoadForForeignersMD;
  onLoadcsvData: LoadcsvData;
  onLoadxlsxData: LoadxlsxData;
  onLoadAboutMD: LoadAboutMD;
  onLoadHistoryMD: LoadHistoryMD;
  onLoadAutomationMD: LoadAutomationMD;
  onLoadStaffMD: LoadStaffMD;
  onLoadVacancyMD: LoadVacancyMD;
  onLoadRestMD: LoadRestMD;
  onLoadRestMD2: LoadRestMD2;
  onLoadDirectionMD: LoadDirectionMD;
  onLoadRequisitesMD: LoadRequisitesMD;
  onLoadForCustomerMD: LoadForCustomerMD;
  onLoadPriceTitleMD: LoadPriceTitleMD;
  onLoadDownLoadMD: LoadDownLoadMD;
}

export interface IState {
  counter: number;
  sendText: string;
}

export function LoadMDFile(
  url: string,
  lang: Language,
  onLoadMDFile: OnLoadMDFile
) {
  return fetch(url)
    .then(res => res.text())
    .then(text => onLoadMDFile({ lang, text }))
    .catch(console.log);
}

export class Page<P extends PageProps = PageProps> extends React.Component<
  P,
  IState
> {
  protected fullWidth: boolean;
  protected logoImg: any;
  protected logo: any;
  protected backgroundImgs: string[];
  protected restImgs: string[];
  protected TimerId: any;
  protected backImg1: any;

  constructor(props: P) {
    super(props);
    this.fullWidth = false;
    this.logoImg = require("../../../public/image/logo_red_white_bk.png");
    this.backgroundImgs = [];
    this.restImgs = [];
    this.state = {
      counter: 0,
      sendText: ''
     };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    ReactGA.pageview(window.location.pathname)
    const {
      goods,
      price,
      groups,
      news,
      onLoadGoods,
      onLoadPrice,
      onLoadGroups,
      onLoadNews,
      sl,
      csvData,
      onLoadcsvData,
      xlsxData,
      onLoadxlsxData
    } = this.props;

    this.TimerId = setInterval(() => {
      let c = this.state.counter;
      if (c < COUNT_IMG_BG - 1) c = c + 1;
      else c = 0;
      this.setState({ counter: c });
    }, 15000);

    const _groups = groups
      ? (groups as IGoodGroups)
      : fetch(goodGroupsFile)
          .then(res => res.text())
          .then(res => JSON.parse(res))
          .then(res => {
            const g = res as IGoodGroups;
            onLoadGroups(g);
            return g;
          });

    const _goods = goods
      ? (goods as IGoods)
      : fetch(goodsFile)
          .then(res => res.text())
          .then(res => JSON.parse(res))
          .then(res => {
            const g = res as IGoods;
            onLoadGoods(g);
            return g;
          });

    const _price = price
      ? (price as IPrice)
      : fetch(priceFile)
          .then(res => res.text())
          .then(res => JSON.parse(res))
          .then(res => {
            const p = res as IPrice;
            onLoadPrice(p);
            return p;
          });

    const _news = news
      ? (news as INews)
      : fetch(newsFile)
          .then(res => res.text())
          .then(res => JSON.parse(res))
          .then(res => {
            const p = res as INews;
            onLoadNews(p);
            return p;
          });

    Promise.all<IGoodGroups, IGoods, IPrice>([_groups, _goods, _price])
      .then(([_, gd, p]) => {
        if (!xlsxData) {
          onLoadxlsxData(
            gd.goods.reduce(
              (ws_data, g, idx) => {
                const myprice = p.price.find(p => p.ruid === g.ruid);
                const n = g.fullname;
                if (idx === 0) {
                  ws_data.push([addInfo.texName[sl].name]);
                  ws_data.push([
                    addInfo.textPriceTop[sl].name +
                      " " +
                      addInfo.textPriceName[sl].name +
                      " " +
                      gd.date
                  ]);
                  ws_data.push([]);
                  ws_data.push(headersX);
                }
                if (myprice) {
                  ws_data.push([
                    idx + 1,
                    n && n.replace(/"/g, '""'),
                    Page.getLName(g.valuename, sl),
                    myprice.costnde,
                    myprice.dcostfull,
                    g.rate,
                    g.beforuse,
                    " " + g.term,
                    myprice && myprice.barcode ? "ш/к " + myprice.barcode : "",
                    Page.getLName(g.ingredients, sl)
                  ]);
                }
                return ws_data;
              },
              [] as IxlsxData
            )
          );
        }
      })
      .catch(err => console.log(err));
  }

  componentWillUnmount() {
    clearInterval(this.TimerId);
  }

  renderBody(): JSX.Element {
    return <div />;
  }

  renderNavPath(props: PageProps): JSX.Element[] {
    const { location, sl } = props;
    let pathname = location.pathname;

    if (pathname === `${PUBLIC_ROOT}`) {
      return [];
    }

    if (pathname.startsWith(PUBLIC_ROOT)) {
      pathname = pathname.slice(PUBLIC_ROOT.length);
    }

    const splitpath = pathname.split("/");

    if (splitpath.length === 1) {
      return [];
    }

    const navPath = splitpath.reduce(
      (p, c, idx) => {
        const mi = mainMenu.find(m => m.path === `${PUBLIC_ROOT}${c}`);
        const capt = mi ? mi.caption[sl].name : c;

        if (mi) {
          p.push(
            <span key={idx}>
              <Link to={mi.path}>{capt}</Link>
            </span>
          );
        } else {
          p.push(<span key={idx}>{capt}</span>);
        }

        return p;
      },
      [] as JSX.Element[]
    );
    return navPath;
  }

  getPageStyle() {
    return "Page";
  }

  static getLName(lname: LName | undefined, l: string) {
    const lang = l.toLowerCase();
    return lname && lname[lang] && lname[lang].name
      ? lname[lang].name
      : lname && lname["ru"] && lname["ru"].name
        ? lname["ru"].name
        : "";
  }

  render() {
    const { sl, location } = this.props;
    const { counter } = this.state;
    const logoImgBtm = require("../../../public/image/logo_bw.svg");
    const backImg = this.backgroundImgs.find((b, idx) => idx === counter);
    var sectionStyle = {
      backgroundImage: `url(${backImg})`
    };

    return (
      <div>
        <div className={this.getPageStyle()}>
          <header>
            <div className="TopRibbon">
              <div className="container TopRibbonContent">
                <Link to={`${PUBLIC_ROOT}downloads`}>
                  {addInfo.textDownLoadFilesTop[sl].name}
                </Link>
                <LangSelector {...this.props} />
              </div>
            </div>
            <div className="container TopMenu">
              {mainMenu && (
                <nav className="nav-main flex">
                  <div className="logoMenu">
                    <Link to={`${PUBLIC_ROOT}`}>
                      {this.logoImg && (
                        <img className="Logo" src={this.logoImg} />
                      )}
                    </Link>
                    <Link to={`${PUBLIC_ROOT}`}>
                      <span className="LogoTitle">{addInfo.texName[sl].name}</span>
                    </Link>
                    <label className="menu-btn" htmlFor="header-toggle">
                      <span className="line line-1" />
                      <span className="line line-2" />
                      <span className="line line-3" />
                    </label>
                  </div>

                  <input id="header-toggle" type="checkbox" />

                  <ul className="nav-main-menu flex">
                    {mainMenu.filter(f => f.path).map((mi, idx) => (
                      <li key={idx}>
                        <Link to={mi.path}>
                          <span
                            className={
                              mi.path !== `${PUBLIC_ROOT}` &&
                              location.pathname.endsWith(mi.path)
                                ? "Selected"
                                : ""
                            }
                          >
                            {mi.caption[sl].name}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              )}
            </div>
          </header>
          <div className="header-back" style={sectionStyle} />
          <div className="header-back-title" />
          {this.logo && <img className="LogoText" src={this.logo} />}
          <main className="FullPage">
            <div className="container">
              <div
                className={this.fullWidth ? "WorkAreaFullWidth" : "WorkArea"}
              >
                {this.fullWidth ||
                location.pathname.indexOf("production") == -1 ? null : (
                  <div className="navPath">
                    {this.renderNavPath(this.props)}
                  </div>
                )}
                {this.renderBody()}
              </div>
              <div
                className={
                  this.getPageStyle().includes("MainPage")
                    ? "Trade"
                    : "NoneDisplay"
                }
              >
                <Trade />
              </div>
            </div>
          </main>
          <footer>
            <div className="Bottom">
              <div className="container">
                {mainMenu &&
                  subMenu && (
                    <nav className="flex FooterMenu">
                      <Link to={`${PUBLIC_ROOT}`}>
                        {<img className="Logo" src={logoImgBtm} />}
                      </Link>
                      {mainMenu.filter(f => f.path).map((mi, idx) => {
                        const subM = subMenu.filter(t => t.id === mi.id);
                        return (
                          <div key={idx}>
                            <span>
                              <ul>
                                <li className="TopLi">
                                  <Link
                                    to={mi.path}
                                    className={
                                      mi.path !== `${PUBLIC_ROOT}` &&
                                      location.pathname.endsWith(mi.path)
                                        ? "Selected"
                                        : ""
                                    }
                                  >
                                    {mi.caption[sl].name}
                                  </Link>
                                </li>
                                {subM &&
                                  subM.map((sm, idx) => (
                                    <li key={idx}>
                                      { sm.path !== 'http://200025739.epfr.by/'
                                      ? <Link to={sm.path}>
                                          {sm.caption[sl].name}
                                        </Link>
                                      : <a href='http://200025739.epfr.by/' target="_blank">
                                          {sm.caption[sl].name}
                                        </a>
                                      }
                                    </li>
                                  ))}
                                {mi.id === 8 && (
                                  <li key={idx + 1}>
                                    Тел.: +375-1643-9-11-11{" "}
                                  </li>
                                )}
                                {mi.id === 8 && (
                                  <li key={idx + 2}>
                                    Тел.: +375-1643-9-11-91{" "}
                                  </li>
                                )}
                                {mi.id === 8 && (
                                  <li key={idx + 3}>Email: bmkk@meat.by </li>
                                )}
                              </ul>
                            </span>
                          </div>
                        );
                      })}
                    </nav>
                  )}
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
