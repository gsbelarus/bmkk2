import * as React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Link } from 'react-router-dom';
import { MainPage } from './components/MainPage';
import { setLanguage, SetLanguage, loadGroups, LoadGroups, loadGoods, loadPrice, LoadPrice, LoadGoods,
         LoadNews, loadNews, LoadContacts, loadContacts, LoadDepartments, loadDepartments,
         LoadOutlets, loadOutlets, LoadcsvData, loadcsvData, loadOutletsMD, LoadOutletsMD, LoadForForeignersMD, loadForForeignersMD,
         loadAboutMD, LoadAboutMD, LoadHistoryMD, LoadStaffMD, LoadVacancyMD, LoadRestMD, LoadRestMD2, loadHistoryMD, loadStaffMD, loadVacancyMD,
         loadRestMD, loadRestMD2, loadDirectionMD, loadRequisitesMD, LoadDirectionMD, LoadRequisitesMD, LoadForCustomerMD, loadForCustomerMD,
         LoadPriceTitleMD, loadPriceTitleMD, LoadDownLoadMD, loadDownLoadMD, LoadxlsxData, loadxlsxData, LoadAutomationMD, loadAutomationMD } from './actions';
import { State } from './store';
import { Language, IGoodGroups, IGoods, IPrice, INews, IContacts, IDepartments, IOutlets, IcsvData, LName, IxlsxData } from './types';
import { Production } from './components/Production';
import { About } from './components/About';
import { Goods } from './components/Goods';
import { Price } from './components/Price';
import { GoodCard } from './components/GoodCard';
import { News } from './components/News';
import { Contacts } from './components/Contacts';
import { Outlets } from './components/Outlets';
import { ForCustomer } from './components/ForCustomer';
import { DownLoadFiles } from './components/DownLoadFiles';
import { BrowserRouter } from 'react-router-dom'
import { Rest } from './components/Rest';
import { NewsCard } from './components/NewsCard';
import { Automation } from './components/Automation';

export interface AppProps {
  aboutMD? : LName;
  contacts?: IContacts;
  csvData?: IcsvData;
  xlsxData?: IxlsxData;
  departments?: IDepartments;
  directionMD?: LName;
  downloadMD?: LName;
  forCustomerMD?: LName;
  forForeignersMD?: LName;
  goods?: IGoods;
  groups?: IGoodGroups;
  historyMD?: LName;
  news?: INews;
  onLoadAboutMD: LoadAboutMD,
  onLoadContacts: LoadContacts;
  onLoadcsvData: LoadcsvData;
  onLoadxlsxData: LoadxlsxData;
  onLoadDepartments: LoadDepartments;
  onLoadDirectionMD: LoadDirectionMD;
  onLoadDownLoadMD: LoadDownLoadMD;
  onLoadForCustomerMD: LoadForCustomerMD;
  onLoadForForeignersMD: LoadForForeignersMD,
  onLoadGoods: LoadGoods;
  onLoadGroups: LoadGroups;
  onLoadHistoryMD: LoadHistoryMD;
  onLoadAutomationMD: LoadAutomationMD;
  onLoadNews: LoadNews;
  onLoadOutlets: LoadOutlets;
  onLoadOutletsMD: LoadOutletsMD
  onLoadPrice: LoadPrice;
  onLoadPriceTitleMD: LoadPriceTitleMD;
  onLoadRequisitesMD: LoadRequisitesMD;
  onLoadRestMD: LoadRestMD;
  onLoadRestMD2: LoadRestMD2;
  onLoadStaffMD: LoadStaffMD;
  onLoadVacancyMD: LoadVacancyMD;
  onSetLanguage: SetLanguage;
  outlets?: IOutlets;
  outletsMD?: LName;
  price?: IPrice;
  priceTitleMD?: LName;
  requisitesMD?: LName;
  restMD?: LName;
  restMD2?: LName;
  selectedGroup: string;
  selectedLang: Language;
  sl: string;
  staffMD?: LName;
  vacancyMD?: LName;
}

class App extends React.Component<AppProps, {}> {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact={true}
            path={PUBLIC_ROOT}
            render={
              (props) => {
                const mergedProps = {...this.props, ...props};
                return <MainPage {...mergedProps} />;
              }
            }
          />
          <Route
            exact={true}
            path={`${PUBLIC_ROOT}production`}
            render={
              (props) => {
                const mergedProps = {...this.props, ...props};
                return <Production {...mergedProps} />;
              }
            }
          />
          <Route
            exact={true}
            path={`${PUBLIC_ROOT}production/:groupID`}
            render={
              (props) => {
                const mergedProps = {...this.props, ...props};
                return <Goods {...mergedProps} />;
              }
            }
          />
          <Route
            path={`${PUBLIC_ROOT}about`}
            render={
              (props) => {
                const mergedProps = {...this.props, ...props};
                return <About {...mergedProps} />;
              }
            }
          />
          <Route
            exact={true}
            path={`${PUBLIC_ROOT}production/:groupID/:goodID`}
            render={
              (props) => {
                const mergedProps = {...this.props, ...props};
                return <GoodCard {...mergedProps} />;
              }
            }
          />
          <Route
            path={`${PUBLIC_ROOT}price`}
            render={
              (props) => {
                const mergedProps = {...this.props, ...props};
                return <Price {...mergedProps} />;
              }
            }
          />
          <Route
            exact={true}
            path={`${PUBLIC_ROOT}news`}
            render={
              (props) => {
                const mergedProps = {...this.props, ...props};
                return <News {...mergedProps} />;
              }
            }
          />
          <Route
            exact={true}
            path={`${PUBLIC_ROOT}news/:newsID`}
            render={
              (props) => {
                const mergedProps = {...this.props, ...props};
                return <NewsCard {...mergedProps} />;
              }
            }
          />
          <Route
            path={`${PUBLIC_ROOT}rest`}
            render={
              (props) => {
                const mergedProps = {...this.props, ...props};
                return <Rest {...mergedProps} />;
              }
            }
          />
          <Route
            path={`${PUBLIC_ROOT}contacts`}
            render={
              (props) => {
                const mergedProps = {...this.props, ...props};
                return <Contacts {...mergedProps} />;
              }
            }
          />
          <Route
            path={`${PUBLIC_ROOT}outlets`}
            render={
              (props) => {
                const mergedProps = {...this.props, ...props};
                return <Outlets {...mergedProps} />;
              }
            }
          />
          <Route
            path={`${PUBLIC_ROOT}forcustomer`}
            render={
              (props) => {
                const mergedProps = {...this.props, ...props};
                return <ForCustomer {...mergedProps} />;
              }
            }
          />
          <Route
            path={`${PUBLIC_ROOT}downloads`}
            render={
              (props) => {
                const mergedProps = {...this.props, ...props};
                return <DownLoadFiles {...mergedProps} />;
              }
            }
          />
          <Route
            path={`${PUBLIC_ROOT}automation`}
            render={
              (props) => {
                const mergedProps = {...this.props, ...props};
                return <Automation {...mergedProps} />;
              }
            }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default connect(
  (state: State) => (
    {
      ...state.appState,
      sl: state.appState.selectedLang.toLowerCase()
    }
  ),
  {
    onSetLanguage: setLanguage,
    onLoadGroups: loadGroups,
    onLoadGoods: loadGoods,
    onLoadPrice: loadPrice,
    onLoadNews: loadNews,
    onLoadContacts: loadContacts,
    onLoadDepartments: loadDepartments,
    onLoadOutlets: loadOutlets,
    onLoadcsvData: loadcsvData,
    onLoadxlsxData: loadxlsxData,
    onLoadOutletsMD: loadOutletsMD,
    onLoadForForeignersMD: loadForForeignersMD,
    onLoadAboutMD: loadAboutMD,
    onLoadHistoryMD: loadHistoryMD,
    onLoadAutomationMD: loadAutomationMD,
    onLoadStaffMD: loadStaffMD,
    onLoadVacancyMD: loadVacancyMD,
    onLoadRestMD: loadRestMD,
    onLoadRestMD2: loadRestMD2,
    onLoadDirectionMD: loadDirectionMD,
    onLoadRequisitesMD: loadRequisitesMD,
    onLoadForCustomerMD: loadForCustomerMD,
    onLoadPriceTitleMD: loadPriceTitleMD,
    onLoadDownLoadMD: loadDownLoadMD
  }
)(App);

