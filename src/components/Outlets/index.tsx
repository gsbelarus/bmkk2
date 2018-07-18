import * as React from 'react';
import { Page } from '../Page';
import { IOutlets } from '../../types';
import { outletsFile, addInfo } from '../../const';
import * as ReactMarkdown from 'react-markdown';
import './outlets.css';

const outletImg = require('../../../public/image/outlet.png');

const mdf: { [lang: string]: string } = {
  ru: require(`../../../public/data/forcustomer/forforeigners.ru.md`),
  be: require(`../../../public/data/forcustomer/forforeigners.be.md`),
  en: require(`../../../public/data/forcustomer/forforeigners.en.md`)
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
      return (
        <div>
          <p>{addInfo.textOutlets[sl].name}</p>
          <div className="OutletBox FlexContainer">
            {
              outlets.outlets.map( (outlet, idx) => {
                const re = /(?:г|д)\.(?:\s){0,1}([А-Яа-я]+)/;
                const match = re.exec(Page.getLName(outlet.address, sl));
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
                      <div>
                        <strong>{Page.getLName(outlet.caption, sl)}</strong>
                      </div>
                      <div>
                        Адрес: <strong>{Page.getLName(outlet.address, sl)}</strong>
                      </div>
                      <div>
                        Телефон: <strong>{outlet.phone}</strong>
                      </div>
                      <div>
                        Email: <strong>{outlet.email}</strong>
                      </div>
                      <div>
                        В рабочие дни: <strong>{outlet.timewd}</strong>
                      </div>
                      <div>
                        В субботу: <strong>{outlet.timesat}</strong>
                      </div>
                      <div>
                        В воскресенье: <strong>{outlet.timesun}</strong>
                      </div>
                      <div>
                        Координаты: <strong>{outlet.lat}, {outlet.lon}</strong>
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
