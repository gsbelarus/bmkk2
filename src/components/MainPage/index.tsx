import { Page, PageProps } from '../Page';
import './mainpage.css';

export class MainPage extends Page {

  getPageStyle() {
    return `${super.getPageStyle()} MainPage`;
  }

  constructor(P: PageProps) {
    super(P);
    this.logoImg = require('../../../public/image/logo1.png');
  }
}