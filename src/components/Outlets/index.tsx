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
          <div className="OutletsContainer">
            {
              outlets.outlets.map( (outlet, idx) => {
                const re = /(?:г|д)\.(?:\s){0,1}([А-Яа-я]+)/;
                const match = re.exec(Page.getLName(outlet.address, sl));
                return (
                  <div key={idx} className="OutletBox">
                    <div className="City">
                      {match && match[1]}
                    </div>
                    <div className="OutletImg">
                      <img src={outletImg} />
                    </div>
                    <div className="OutletData">
                      <div>
                        <strong>{Page.getLName(outlet.caption, sl)}</strong>
                      </div>
                      <div>
                        <strong>Адрес: </strong>{Page.getLName(outlet.address, sl)}
                      </div>
                      <div>
                        <strong>Телефон: </strong>{outlet.phone}
                      </div>
                      <div>
                        <strong>Email: </strong>{outlet.email}
                      </div>
                      <div>
                        <strong>В рабочие дни: </strong>{outlet.timewd}
                      </div>
                      <div>
                        <strong>В субботу: </strong>{outlet.timesat}
                      </div>
                      <div>
                        <strong>В воскресенье: </strong>{outlet.timesun}
                      </div>
                      <div>
                        <strong>Координаты: </strong>{outlet.lat}, {outlet.lon}
                      </div>
                    </div>
                  </div>
                );
              })
            }
          </div>
          <ReactMarkdown source={mdf[sl.toLowerCase()]} className="Foreign" />
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
