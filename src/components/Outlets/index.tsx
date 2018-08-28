import * as React from 'react';
import { Page } from '../Page';
import { IOutlets } from '../../types';
import { outletsFile, addInfo, outletsRoot, outletFileNoImage } from '../../const';
import * as ReactMarkdown from 'react-markdown';
import './outlets.css';

// const outletImg = require('../../../public/image/outlet.png');

const mdf: { [lang: string]: string } = {
  ru: require(`../../../public/data/forcustomer/forforeigners.ru.md`),
  be: require(`../../../public/data/forcustomer/forforeigners.be.md`),
  en: require(`../../../public/data/forcustomer/forforeigners.en.md`)
};

const md: { [lang: string]: string } = {
  ru: require(`@data_root/outlets/outlets.ru.md`),
  be: require(`@data_root/outlets/outlets.be.md`),
  en: require(`@data_root/outlets/outlets.en.md`)
};

export class Outlets extends Page {

  componentDidMount() {
    const { onLoadOutlets } = this.props;
    fetch(outletsFile)
    .then( res => res.text())
    .then( res => JSON.parse(res) )
    .then( res => onLoadOutlets(res as IOutlets) )
    .catch( err => console.log(err) );    
  }

  renderBody(): JSX.Element {
    const { outlets, sl } = this.props;

    if (outlets) {
      outlets.outlets.sort((a, b) => a.ordr - b.ordr);
      return (
        <div>
          <div>
            <ReactMarkdown source={md[sl.toLowerCase()]} />
          </div>  
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
          <div id="foreigns">
            <ReactMarkdown source={mdf[sl.toLowerCase()]} />
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
