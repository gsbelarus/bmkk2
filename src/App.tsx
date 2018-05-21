import * as React from 'react';
import { connect, Dispatch as ReduxDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { MainPage } from './components/MainPage';
import { setLanguage, SetLanguage } from './actions';
import { State } from './store';
import { Language } from './types';
import { BMKKAction } from './reducer';

type Dispatch = ReduxDispatch<BMKKAction>;

export type AppProps = {
  selectedLang: Language,
  onSetLanguage: SetLanguage
};

class App extends React.Component<AppProps, {}> {
  render() {
    return (
      <BrowserRouter>
        <MainPage {...this.props} />
      </BrowserRouter>
    );
  }
}

export default connect(
  (state: State) => ({ ...state.appState }),
  { onSetLanguage: setLanguage }
)(App);