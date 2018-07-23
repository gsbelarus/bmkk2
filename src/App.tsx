import * as React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { MainPage } from './components/MainPage';
import { setLanguage, SetLanguage, loadGroups, LoadGroups, loadGoods, loadPrice, LoadPrice, LoadGoods,
         LoadNews, loadNews, LoadContacts, loadContacts, LoadDepartments, loadDepartments,
         LoadOutlets, loadOutlets } from './actions';
import { State } from './store';
import { Language, IGoodGroups, IGoods, IPrice, INews, IContacts, IDepartments, IOutlets } from './types';
import { Production } from './components/Production';
import { About } from './components/About';
import { Goods } from './components/Goods';
import { Price } from './components/Price';
import { GoodCard } from './components/GoodCard';
import { News } from './components/News';
import { Contacts } from './components/Contacts';
import { Outlets } from './components/Outlets';
import { ForCustomer } from './components/ForCustomer';
import { BrowserRouter } from 'react-router-dom'

export interface AppProps {
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
  selectedGroup: string;
  onLoadGoods: LoadGoods;
  onLoadPrice: LoadPrice;
  onLoadNews: LoadNews;
  onLoadContacts: LoadContacts;
  onLoadDepartments: LoadDepartments;
  onLoadOutlets: LoadOutlets;
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
    onLoadOutlets: loadOutlets
  }
)(App);