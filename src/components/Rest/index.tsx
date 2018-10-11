import * as React from 'react';
import { Page, LoadMDFile, PageProps } from '../Page';
import * as ReactMarkdown from 'react-markdown';
import './rest.css';
import { languages } from '../../types';
import { aboutRoot } from '../../const';
import { MultipleItems } from '../Slider';

export class Rest extends Page {
  constructor(P: PageProps) {
    let i: number = 0;
    let restImg: string[] = [];
    for (i = 1; i <= 9; i++) {
      restImg.push(require("../../../public/image/rest/rest" + i + ".jpg"));
    }
    super(P);
    this.restImgs = restImg;
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
            {/* restImgs && <MultipleItems sliderImgs={this.restImgs}/>  */}
          </div>                       
        }  
      </div>         
      );
  }
}