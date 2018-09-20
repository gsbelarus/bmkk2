import * as React from 'react';
import { Page, LoadMDFile } from '../Page';
import * as ReactMarkdown from 'react-markdown';
import './forcustomer.css';
import { languages } from '../../types';
import { forcustomerRoot } from '../../const';


const map = require('../../../public/image/map.jpg');

export class ForCustomer extends Page {

  componentDidMount() {
    super.componentDidMount();
    const { onLoadForCustomerMD, onLoadDirectionMD, onLoadRequisitesMD, onLoadForForeignersMD} = this.props;
      languages.map((l, idx) => 
        {
          LoadMDFile(`${forcustomerRoot}forcustomer.` + l.toLowerCase() + `.md`, l, onLoadForCustomerMD);  
          LoadMDFile(`${forcustomerRoot}direction.` + l.toLowerCase() + `.md`, l, onLoadDirectionMD);     
          LoadMDFile(`${forcustomerRoot}requisites.` + l.toLowerCase() + `.md`, l, onLoadRequisitesMD); 
          LoadMDFile(`${forcustomerRoot}forforeigners.${l.toLowerCase()}.md`, l, onLoadForForeignersMD);      
        }
      ) 
  }  

  getPageStyle() {
    return `${super.getPageStyle()} ForCustomer`;
  }
   

  renderBody(): JSX.Element {
    const { sl, selectedLang, forCustomerMD, directionMD, requisitesMD, forForeignersMD } = this.props;
    return (
      <div>
        { forCustomerMD && forCustomerMD[sl.toUpperCase()] &&
          <ReactMarkdown source={forCustomerMD[sl.toUpperCase()].name} />
        }  
        <div id="direction">
          { directionMD && directionMD[sl.toUpperCase()] &&
            <ReactMarkdown source={directionMD[sl.toUpperCase()].name} />
          }  
          <a href="https://www.google.com/maps/place/Berozovskiy+Myasokonservnyy+Kombinat/@52.543019,24.9606592,14.5z/data=!4m5!3m4!1s0x4720b6da3c7872d3:0xbf3aaf50876462b4!8m2!3d52.542146!4d24.9549723" target="_blank">
            <img src={map} />
          </a>
        </div>  
        { requisitesMD && requisitesMD[sl.toUpperCase()] && 
          <div id="requisites">
            <ReactMarkdown source={requisitesMD[sl.toUpperCase()].name} />
          </div>
        }     
        { forForeignersMD && forForeignersMD[sl.toUpperCase()] &&
          <div id="foreigns">
            <ReactMarkdown source={forForeignersMD[sl.toUpperCase()].name} />            
          </div> 
        }               
      </div>
    );
  }
}