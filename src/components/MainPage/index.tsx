import { Page, PageProps } from "../Page";
import "./mainpage.css";

export class MainPage extends Page {
  getPageStyle() {
    return `${super.getPageStyle()} MainPage`;
  }

  constructor(P: PageProps) {
    let i: number = 0;
    let arrImg: string[] = [];
    for (i = 1; i <= 14; i++) {
      arrImg.push(require("../../../public/image/sl" + i + ".jpg"));
    }
    super(P);
    this.logoImg = require("../../../public/image/logo_bw.svg");
    this.backgroundImgs = arrImg;
  }
}
