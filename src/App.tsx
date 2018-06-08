import * as React from 'react';
import { connect, Dispatch as ReduxDispatch } from 'react-redux';
import { HashRouter, Switch, Route, RouteComponentProps } from 'react-router-dom';
import './App.css';
import { MainPage } from './components/MainPage';
import { setLanguage, SetLanguage, loadGroups, LoadGroups, loadGoods, LoadGoods,
         LoadNews, loadNews, LoadContacts, loadContacts, LoadDepartments, loadDepartments,
         LoadOutlets, loadOutlets } from './actions';
import { State } from './store';
import { Language, IGoodGroups, IGoods, INews, IContacts, IDepartments, IOutlets } from './types';
import { BMKKAction } from './reducer';
import { Production } from './components/Production';
import { About } from './components/About';
import { Goods } from './components/Goods';
import { Price } from './components/Price';
import { GoodCard } from './components/GoodCard';
import { News } from './components/News';
import { Contacts } from './components/Contacts';
import { Outlets } from './components/Outlets';

type Dispatch = ReduxDispatch<BMKKAction>;

export interface AppProps {
  selectedLang: Language;
  groups: IGoodGroups;
  goods: IGoods;
  news: INews;
  contacts: IContacts;
  departments: IDepartments;
  outlets: IOutlets;
  onSetLanguage: SetLanguage;
  onLoadGroups: LoadGroups;
  selectedGroup: string;
  onLoadGoods: LoadGoods;
  onLoadNews: LoadNews;
  onLoadContacts: LoadContacts;
  onLoadDepartments: LoadDepartments;
  onLoadOutlets: LoadOutlets;
}

class App extends React.Component<AppProps, {}> {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route
            exact={true}
            path="/"
            render={
              (props) => {
                const mergedProps = {...this.props, ...props};
                return <MainPage {...mergedProps} />;
              }
            }
          />
          <Route
            exact={true}
            path="/production"
            render={
              (props) => {
                const mergedProps = {...this.props, ...props};
                return <Production {...mergedProps} />;
              }
            }
          />
          <Route
            exact={true}
            path="/production/groups/:groupID"
            render={
              (props) => {
                const mergedProps = {...this.props, ...props};
                return <Goods {...mergedProps} />;
              }
            }
          />
          <Route
            exact={true}
            path="/about"
            render={
              (props) => {
                const mergedProps = {...this.props, ...props};
                return <About {...mergedProps} />;
              }
            }
          />
          <Route
            exact={true}
            path="/production/groups/:groupID/good/:goodID"
            render={
              (props) => {
                const mergedProps = {...this.props, ...props};
                return <GoodCard {...mergedProps} />;
              }
            }
          />
          <Route
            exact={true}
            path="/price"
            render={
              (props) => {
                const mergedProps = {...this.props, ...props};
                return <Price {...mergedProps} />;
              }
            }
          />
          <Route
            exact={true}
            path="/news"
            render={
              (props) => {
                const mergedProps = {...this.props, ...props};
                return <News {...mergedProps} />;
              }
            }
          />
          <Route
            exact={true}
            path="/contacts"
            render={
              (props) => {
                const mergedProps = {...this.props, ...props};
                return <Contacts {...mergedProps} />;
              }
            }
          />
          <Route
            exact={true}
            path="/outlets"
            render={
              (props) => {
                const mergedProps = {...this.props, ...props};
                return <Outlets {...mergedProps} />;
              }
            }
          />
        </Switch>
      </HashRouter>
    );
  }
}

export default connect(
  (state: State) => ({ ...state.appState }),
  {
    onSetLanguage: setLanguage,
    onLoadGroups: loadGroups,
    onLoadGoods: loadGoods,
    onLoadNews: loadNews,
    onLoadContacts: loadContacts,
    onLoadDepartments: loadDepartments,
    onLoadOutlets: loadOutlets
  }
)(App);