import * as React from 'react';
import { Page, PageProps } from '../Page';
import './mainpage.css';

export class MainPage extends Page {
  constructor(P: PageProps) {
    super(P);
    this.logoImg = require('../../../public/image/logo1.png');
  }
}