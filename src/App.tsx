import * as React from 'react';
import { connect, Dispatch as ReduxDispatch } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import { MainPage } from './components/MainPage';
import { setLanguage, SetLanguage, loadGroups, LoadGroups, loadGoods, LoadGoods } from './actions';
import { State } from './store';
import { Language, IGoodGroups, IGoods } from './types';
import { BMKKAction } from './reducer';
import { Production } from './components/Production';
import { About } from './components/About';
import { Goods } from './components/Goods';

type Dispatch = ReduxDispatch<BMKKAction>;

export type AppProps = {
  selectedLang: Language,
  groups: IGoodGroups,
  goods: IGoods,
  onSetLanguage: SetLanguage,
  onLoadGroups: LoadGroups, 
  selectedGroup: string,
  onLoadGoods: LoadGoods
};

class App extends React.Component<AppProps, {}> {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/" render={() => (<MainPage {...this.props} />)} />
          <Route exact={true} path="/production" render={() => (<Production {...this.props} />)} />
          <Route exact={true} 
            path="/production/:groupID?" 
            /*children = {({match}) => match} */
            render={() => (<Goods {...this.props}  />)} />
          <Route exact={true} path="/about" render={() => (<About {...this.props} />)} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default connect(
  (state: State) => ({ ...state.appState }),
  {
    onSetLanguage: setLanguage,
    onLoadGroups: loadGroups,
    onLoadGoods: loadGoods
  }
)(App);