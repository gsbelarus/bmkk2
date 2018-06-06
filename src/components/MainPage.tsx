import * as React from 'react';
import { Page, PageProps } from './Page';

const logoImg = require('../../public/image/logo1.png');

export class MainPage extends Page {
  renderBody(): JSX.Element {
    return (<img className="Logo" src={logoImg} />);
  }
}