import * as React from 'react';
import { Page } from '../Page';
import * as ReactMarkdown from 'react-markdown';
import './about.css';

const img1 = require(`../../../public/data/about/about1.jpg`); 
const img2 = require(`../../../public/data/about/about2.jpg`); 
const img3 = require(`../../../public/data/about/about3.jpg`); 
const img4 = require(`../../../public/data/about/about4.jpg`); 

const md: { [lang: string]: string } = {
  ru: require(`../../../public/data/about/about.ru.md`),
  be: require(`../../../public/data/about/about.be.md`),
  en: require(`../../../public/data/about/about.en.md`)
};

const mdh: { [lang: string]: string } = {
  ru: require(`../../../public/data/about/history.ru.md`),
  be: require(`../../../public/data/about/history.be.md`),
  en: require(`../../../public/data/about/history.en.md`)
};

const mds: { [lang: string]: string } = {
  ru: require(`../../../public/data/about/staff.ru.md`),
  be: require(`../../../public/data/about/staff.be.md`),
  en: require(`../../../public/data/about/staff.en.md`)
};

const mdv: { [lang: string]: string } = {
  ru: require(`../../../public/data/about/vacancy.ru.md`),
  be: require(`../../../public/data/about/vacancy.be.md`),
  en: require(`../../../public/data/about/vacancy.en.md`)
};

const mdr: { [lang: string]: string } = {
  ru: require(`../../../public/data/about/rest.ru.md`),
  be: require(`../../../public/data/about/rest.be.md`),
  en: require(`../../../public/data/about/rest.en.md`)
};

export class About extends Page {
  renderBody(): JSX.Element {
    const { sl } = this.props;
    return (
      <div>
        <div className="About">
          <ReactMarkdown source={md[sl]} className="AboutText"/>        
          <div className="AboutImg">
            <img src={img1} />
            <img src={img2} />          
            <img src={img3} />          
            <img src={img4} />
          </div>         
        </div>  
        <div id="history">
          <ReactMarkdown source={mdh[sl]}/> 
        </div>   
        <div id="staff">
          <ReactMarkdown source={mds[sl]}/> 
        </div>
        <div id="vacancy">
          <ReactMarkdown source={mdv[sl]}/> 
        </div>          
        <div id="rest">
          <ReactMarkdown source={mdr[sl]}/> 
        </div>                 
      </div>    
      );
  }
}