import * as React from 'react';
import { Page, LoadMDFile } from '../Page';
import * as ReactMarkdown from 'react-markdown';
import './about.css';
import { languages } from '../../types';
import { aboutRoot } from '../../const';

// const img1 = require(`../../../public/data/about/about1.jpg`); 
// const img2 = require(`../../../public/data/about/about2.jpg`); 
// const img3 = require(`../../../public/data/about/about3.jpg`); 
// const img4 = require(`../../../public/data/about/about4.jpg`); 

export class About extends Page {

  componentDidMount() {
    super.componentDidMount();

    const { onLoadAboutMD, onLoadHistoryMD, onLoadStaffMD, onLoadVacancyMD} = this.props;
    languages.map((l, idx) => 
      {
        LoadMDFile(`${aboutRoot}about.` + l.toLowerCase() + `.md`, l, onLoadAboutMD);  
        LoadMDFile(`${aboutRoot}history.` + l.toLowerCase() + `.md`, l, onLoadHistoryMD);     
        LoadMDFile(`${aboutRoot}staff.` + l.toLowerCase() + `.md`, l, onLoadStaffMD);  
        LoadMDFile(`${aboutRoot}vacancy.` + l.toLowerCase() + `.md`, l, onLoadVacancyMD);       
      }
    )    
  }

  renderBody(): JSX.Element {
    const { sl, aboutMD, historyMD, staffMD, vacancyMD } = this.props;
    return (
      <div>
        { aboutMD && aboutMD[sl.toUpperCase()] &&
          <div className="About">
            <ReactMarkdown source={aboutMD[sl.toUpperCase()].name} className="AboutText"/>        
            {/* <div className="AboutImg">
              <img src={img1} />
              <img src={img2} />          
              <img src={img3} />          
              <img src={img4} />
            </div>          */}
          </div>
        } 
        { historyMD && historyMD[sl.toUpperCase()] &&
          <div id="history">
            <ReactMarkdown source={historyMD[sl.toUpperCase()].name}/> 
          </div>
        }
        { staffMD && staffMD[sl.toUpperCase()] &&
          <div id="staff">
            <ReactMarkdown source={staffMD[sl.toUpperCase()].name}/> 
          </div>
        }  
        { vacancyMD && vacancyMD[sl.toUpperCase()] &&
          <div id="vacancy">
            <ReactMarkdown source={vacancyMD[sl.toUpperCase()].name}/> 
          </div>          
        }  
      </div> 
        
      );
  }
}