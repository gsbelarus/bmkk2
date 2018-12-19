import * as React from 'react';
import { Page, LoadMDFile } from '../Page';
import * as ReactMarkdown from 'react-markdown';
import './about.css';
import { languages } from '../../types';
import { aboutRoot } from '../../const';

export class About extends Page {

  componentDidMount() {
    super.componentDidMount();

    const { onLoadAboutMD, onLoadHistoryMD} = this.props;
    languages.forEach((l, idx) => 
      {
        LoadMDFile(`${aboutRoot}about.${l.toLowerCase()}.md`, l, onLoadAboutMD);  
        LoadMDFile(`${aboutRoot}history.${l.toLowerCase()}.md`, l, onLoadHistoryMD);    
      }
    )    
  }

  renderBody(): JSX.Element {
    const { sl, aboutMD, historyMD } = this.props;
    return (
      <div>
        { aboutMD && aboutMD[sl.toUpperCase()] &&
          <div className="About">
            <ReactMarkdown source={aboutMD[sl.toUpperCase()].name} className="AboutText"/>       
          </div>
        } 
        { historyMD && historyMD[sl.toUpperCase()] &&
          <div id="history">
            <ReactMarkdown source={historyMD[sl.toUpperCase()].name}/> 
          </div>
        }
      </div>         
    );
  }
}