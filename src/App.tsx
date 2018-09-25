import * as React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { MainPage } from './components/MainPage';
import { setLanguage, SetLanguage, loadGroups, LoadGroups, loadGoods, loadPrice, LoadPrice, LoadGoods,
         LoadNews, loadNews, LoadContacts, loadContacts, LoadDepartments, loadDepartments,
         LoadOutlets, loadOutlets, LoadcsvData, loadcsvData, loadOutletsMD, LoadOutletsMD, LoadForForeignersMD, loadForForeignersMD, 
         loadAboutMD, LoadAboutMD, LoadHistoryMD, LoadStaffMD, LoadVacancyMD, LoadRestMD, loadHistoryMD, loadStaffMD, loadVacancyMD, 
         loadRestMD, loadDirectionMD, loadRequisitesMD, LoadDirectionMD, LoadRequisitesMD, LoadForCustomerMD, loadForCustomerMD, 
         LoadPriceTitleMD, loadPriceTitleMD, LoadDownLoadMD, loadDownLoadMD } from './actions';
import { State } from './store';
import { Language, IGoodGroups, IGoods, IPrice, INews, IContacts, IDepartments, IOutlets, IcsvData, LName } from './types';
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

export interface AppProps {
  aboutMD? : LName;
  contacts?: IContacts;
  csvData?: IcsvData;
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
  onLoadDepartments: LoadDepartments;
  onLoadDirectionMD: LoadDirectionMD;
  onLoadDownLoadMD: LoadDownLoadMD;
  onLoadForCustomerMD: LoadForCustomerMD;
  onLoadForForeignersMD: LoadForForeignersMD,
  onLoadGoods: LoadGoods;
  onLoadGroups: LoadGroups;
  onLoadHistoryMD: LoadHistoryMD;
  onLoadNews: LoadNews;
  onLoadOutlets: LoadOutlets;
  onLoadOutletsMD: LoadOutletsMD
  onLoadPrice: LoadPrice;
  onLoadPriceTitleMD: LoadPriceTitleMD;
  onLoadRequisitesMD: LoadRequisitesMD;
  onLoadRestMD: LoadRestMD;
  onLoadStaffMD: LoadStaffMD;
  onLoadVacancyMD: LoadVacancyMD;
  onSetLanguage: SetLanguage;
  outlets?: IOutlets;
  outletsMD?: LName;
  price?: IPrice;
  priceTitleMD?: LName;
  requisitesMD?: LName;
  restMD?: LName;
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
            path={`${PUBLIC_ROOT}news`}
            render={
              (props) => {
                const mergedProps = {...this.props, ...props};
                return <News {...mergedProps} />;
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
    onLoadOutletsMD: loadOutletsMD,
    onLoadForForeignersMD: loadForForeignersMD,
    onLoadAboutMD: loadAboutMD,
    onLoadHistoryMD: loadHistoryMD,
    onLoadStaffMD: loadStaffMD,
    onLoadVacancyMD: loadVacancyMD,
    onLoadRestMD: loadRestMD,
    onLoadDirectionMD: loadDirectionMD,
    onLoadRequisitesMD: loadRequisitesMD,
    onLoadForCustomerMD: loadForCustomerMD,
    onLoadPriceTitleMD: loadPriceTitleMD,
    onLoadDownLoadMD: loadDownLoadMD
  }
)(App);

