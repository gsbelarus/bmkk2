import { Page, PageProps } from '../Page';
import './mainpage.css';

export class MainPage extends Page {

  getPageStyle() {
    return `${super.getPageStyle()} MainPage`;
  }

  constructor(P: PageProps) {
    super(P);
    this.logoImg = require('../../../public/image/logo_bw.svg');
    this.backgroundImgs = [require('../../../public/image/sl1.jpg'), require('../../../public/image/sl2.jpg'), 
      require('../../../public/image/sl3.jpg'), require('../../../public/image/sl4.jpg'), require('../../../public/image/sl5.jpg'),
      require('../../../public/image/sl6.jpg'), require('../../../public/image/sl7.jpg')] ;
  }

}