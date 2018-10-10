import * as React from 'react';
import { Page, LoadMDFile } from '../Page';
import { IOutlets, languages } from '../../types';
import { outletsFile, outletsRoot, outletFileNoImage, forcustomerRoot, outletsCaption, noImageRoot } from '../../const';
import * as ReactMarkdown from 'react-markdown';
import './outlets.css';
export class Outlets extends Page {

  componentDidMount() {
    super.componentDidMount();
    const { onLoadOutlets, onLoadOutletsMD } = this.props;
    fetch(outletsFile)
    .then( res => res.text())
    .then( res => JSON.parse(res) )
    .then( res => onLoadOutlets(res as IOutlets) )
    .catch( err => console.log(err) );  

    languages.map((l, idx) => 
      {
        LoadMDFile(`${outletsRoot}outlets.${l.toLowerCase()}.md`, l, onLoadOutletsMD);          
      }
    )       
  }

  renderBody(): JSX.Element {
    const { outlets, sl, outletsMD, forForeignersMD } = this.props;
    
    if (outlets) {
      outlets.outlets.sort((a, b) => a.ordr - b.ordr);
      return (
        <div>
          { outletsMD && outletsMD[sl.toUpperCase()] &&
            <div>
              <ReactMarkdown source={outletsMD[sl.toUpperCase()].name} />            
            </div> 
          }  
          <div className="OutletBox FlexContainer">
            {
              outlets.outlets.map( (outlet, idx) => {
                const re = /(?:г|д)\.(?:\s){0,1}([А-Яа-я]+)/;
                const match = re.exec(Page.getLName(outlet.address, sl));
                const outletImg = !outlet.image ? `${noImageRoot}${outletFileNoImage}`
                : outlet.image.includes('/') ? outlet.image
                : `${outletsRoot}${outlet.image}`;
                return (
                  <div key={idx} className="Card">
                    <div className="bg"></div>                   
                    <div className="City">
                      {match && match[1]}
                      </div>
                    <div className="OutletImg">
                      <img src={outletImg} />
                    </div>
                    <div className="CardCaption OutletData">
                      <div className="CardCaptionTitle">
                        {Page.getLName(outlet.caption, sl)}
                      </div>
                      <div>
                        <span className="CardCaptionLabel">{outletsCaption.address[sl].name}: </span>{Page.getLName(outlet.address, sl)}
                      </div>
                      <div>
                        <span className="CardCaptionLabel">{outletsCaption.phone[sl].name}: </span>{outlet.phone}
                      </div>
                      {/* <div>
                        <span className="CardCaptionLabel">{outletsCaption.email[sl].name}: </span>{outlet.email}
                      </div> */}
                      <div>
                        <span className="CardCaptionLabel">{outletsCaption.timewd[sl].name}: </span>{outlet.timewd}
                      </div>
                      <div>
                        <span className="CardCaptionLabel">{outletsCaption.timesat[sl].name}: </span>{outlet.timesat}
                      </div>
                      <div>
                        <span className="CardCaptionLabel">{outletsCaption.timesun[sl].name}: </span>{outlet.timesun}
                      </div>
                    </div>
                  </div>
                );
              })
            }
          </div>
        </div>  
      );
    } else {
      return (
        <div>
          Loading...
        </div>
      );
    }
  }
}
