import * as React from 'react';
import { connect, Dispatch as ReduxDispatch } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import { MainPage } from './components/MainPage';
import { setLanguage, SetLanguage } from './actions';
import { State } from './store';
import { Language } from './types';
import { BMKKAction } from './reducer';
import { Production } from './components/Production';

type Dispatch = ReduxDispatch<BMKKAction>;

export type AppProps = {
  selectedLang: Language,
  onSetLanguage: SetLanguage
};

class App extends React.Component<AppProps, {}> {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/" render={() => (<MainPage {...this.props} />)} />
          <Route exact={true} path="/production" render={() => (<Production {...this.props} />)} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default connect(
  (state: State) => ({ ...state.appState }),
  { onSetLanguage: setLanguage }
)(App);