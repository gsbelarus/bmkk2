import * as React from 'react';
import { Page, LoadMDFile } from '../Page';
import { IOutlets, languages } from '../../types';
import { outletsFile, outletsRoot, outletFileNoImage, forcustomerRoot } from '../../const';
import * as ReactMarkdown from 'react-markdown';
import './outlets.css';

export class Outlets extends Page {

  componentDidMount() {
    const { onLoadOutlets, onLoadOutletsMD, onLoadForForeignersMD } = this.props;
    fetch(outletsFile)
    .then( res => res.text())
    .then( res => JSON.parse(res) )
    .then( res => onLoadOutlets(res as IOutlets) )
    .catch( err => console.log(err) );  

    languages.map((l, idx) => 
      {
        LoadMDFile(`${outletsRoot}outlets.` + l.toLowerCase() + `.md`, l, onLoadOutletsMD);  
        LoadMDFile(`${forcustomerRoot}forforeigners.` + l.toLowerCase() + `.md`, l, onLoadForForeignersMD);     
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
                const outletImg = !outlet.image ? `${outletsRoot}${outletFileNoImage}`
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
                        <span className="CardCaptionLabel">Адрес: </span>{Page.getLName(outlet.address, sl)}
                      </div>
                      <div>
                        <span className="CardCaptionLabel">Телефон: </span>{outlet.phone}
                      </div>
                      <div>
                        <span className="CardCaptionLabel">Email: </span>{outlet.email}
                      </div>
                      <div>
                        <span className="CardCaptionLabel">В рабочие дни: </span>{outlet.timewd}
                      </div>
                      <div>
                        <span className="CardCaptionLabel">В субботу: </span>{outlet.timesat}
                      </div>
                      <div>
                        <span className="CardCaptionLabel">В воскресенье: </span>{outlet.timesun}
                      </div>
                      <div>
                        <span className="CardCaptionLabel">Координаты: </span>{outlet.lat}, {outlet.lon}
                      </div>
                    </div>
                  </div>
                );
              })
            }
          </div>

          { forForeignersMD && forForeignersMD[sl.toUpperCase()] &&
            <div id="foreigns">
              <ReactMarkdown source={forForeignersMD[sl.toUpperCase()].name} />            
            </div> 
          } 


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
