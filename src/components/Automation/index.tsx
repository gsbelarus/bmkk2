import * as React from 'react';
import { Page, LoadMDFile } from '../Page';
import * as ReactMarkdown from 'react-markdown';
import { languages } from '../../types';
import { aboutRoot } from '../../const';
import './automation.css';

export class Automation extends Page {

  componentDidMount() {
    super.componentDidMount();

    const { onLoadAutomationMD} = this.props;
    languages.forEach((l, idx) => 
      {
        LoadMDFile(`${aboutRoot}automation.${l.toLowerCase()}.md`, l, onLoadAutomationMD);    
      }
    )    
  }

  renderBody(): JSX.Element {
    const { sl, automationMD } = this.props;
    return (
      <div>
        { automationMD && automationMD[sl.toUpperCase()] &&
          <div className="Automation">
            <ReactMarkdown source={automationMD[sl.toUpperCase()].name} className="AboutText"/>       
          </div>
        } 
      </div>         
    );
  }
}