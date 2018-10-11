import * as React from 'react';
import { Page, LoadMDFile } from '../Page';
import * as ReactMarkdown from 'react-markdown';
import './rest.css';
import { languages } from '../../types';
import { aboutRoot } from '../../const';
import { MultipleItems } from '../Slider';

export class Rest extends Page {

  constructor(P: PageProps) {
    let i: number = 0;
    let arrImg: string[] = [];
    for (i = 1; i <= COUNT_IMG_BG; i++) {
      arrImg.push(require("../../../public/image/sl" + i + ".jpg"));
    }
    super(P);
    this.logoImg = require("../../../public/image/logo_bw.svg");
    this.backgroundImgs = arrImg;
  }

  componentDidMount() {
    super.componentDidMount();

    const { onLoadRestMD} = this.props;
    languages.map((l, idx) => 
      { 
        LoadMDFile(`${aboutRoot}rest.` + l.toLowerCase() + `.md`, l, onLoadRestMD); 
      }
    )    
  }

  renderBody(): JSX.Element {
    const { sl, restMD } = this.props;
    return (
      <div>
        { restMD && restMD[sl.toUpperCase()] &&
          <div id="rest">
            <ReactMarkdown source={restMD[sl.toUpperCase()].name}/> 
            <MultipleItems /> 
          </div>                       
        }  
      </div>         
      );
  }
}